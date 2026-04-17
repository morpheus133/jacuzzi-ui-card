import { TemplateResult, LitElement, html, css, svg, CSSResultGroup, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import {
    mdiFire,
    mdiSnowflake,
    mdiPower,
    mdiFan,
    mdiCalendarSync,
    mdiAutorenew,
    mdiWaterPercent,
    mdiThermometer,
    mdiHeatWave,
    mdiMinus,
    mdiPlus,
    mdiAirConditioner,
    mdiWeatherWindy,
    mdiDotsVertical,
    mdiAirFilter,
    mdiRecycle,
    mdiChartBubble,
} from "@mdi/js";

import { CARD_VERSION } from "./const";
import { localize } from "./localize/localize";
import {
    clamp,
    ClimateEntity,
    debounce,
    fireEvent,
    formatNumber,
    HomeAssistant,
    LovelaceCard,
    LovelaceCardEditor,
} from "./ha";
import { JacuzziCardConfig } from "./jacuzzi-card-config";
import "./ha/ha-control-circular-slider";

const UNAVAILABLE = "unavailable";
const UNKNOWN = "unknown";

const modeIcons: Record<string, string> = {
    auto: mdiCalendarSync,
    heat_cool: mdiAutorenew,
    heat: mdiFire,
    cool: mdiSnowflake,
    off: mdiPower,
    fan_only: mdiFan,
    dry: mdiWaterPercent,
    temperature: mdiThermometer,
    ok: mdiAirConditioner,
};

type Target = "value";

interface RegisterCardParams {
    type: string;
    name: string;
    description: string;
}

function registerCustomCard(params: RegisterCardParams) {
    const windowWithCards = window as unknown as Window & {
        customCards: unknown[];
    };
    windowWithCards.customCards = windowWithCards.customCards || [];
    windowWithCards.customCards.push({
        ...params,
        preview: true,
    });
}

registerCustomCard({
    type: "better-jacuzzi-ui-card",
    name: "Jacuzzi / spa card",
    description: "Climate ring with optional pumps and sanitizer",
});

console.info(
    `%c  BetterJacuzziUI-CARD \n%c  version: ${CARD_VERSION}    `,
    "color: #00bcd4; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray",
);

type SwitchSlot = "power" | "jets" | "filter" | "bubbles" | "sanitizer";

const SWITCH_ICONS: Record<SwitchSlot, string> = {
    power: mdiPower,
    jets: mdiWeatherWindy,
    filter: mdiAirFilter,
    bubbles: mdiChartBubble,
    sanitizer: mdiRecycle,
};

@customElement("better-jacuzzi-ui-card")
export class BetterJacuzziUi extends LitElement implements LovelaceCard {
    public static async getConfigElement(): Promise<LovelaceCardEditor> {
        await import("./better-jacuzzi-ui-card-editor");
        return document.createElement("better-jacuzzi-ui-card-editor") as LovelaceCardEditor;
    }

    public static async getStubConfig(hass: HomeAssistant): Promise<Record<string, unknown>> {
        const entities = Object.keys(hass.states);
        const climates = entities.filter((e) => e.split(".")[0] === "climate");
        return {
            type: "custom:better-jacuzzi-ui-card",
            entity: climates[0] ?? "",
        };
    }

    @property({ attribute: false }) public hass!: HomeAssistant;
    @property({ type: Number }) public value: Partial<Record<Target, number>> = {};
    @property({ type: Number }) public current = 0;
    @property({ type: Number }) public current_humidity = 0;
    @property({ type: Number }) public min = 0;
    @property({ type: Number }) public max = 45;
    @property({ type: Number }) public step = 1;
    @property({ type: String }) public mode = "off";
    @state() private _fanModes: string[] = [];
    @state() private _fanMode = "";
    @state() private _errorOverlay: string | null = null;

    private target: Target = "value";
    private stateObj: ClimateEntity | undefined;
    private _display_bottom = 0;
    private _display_top = 0;
    private modes: string[] = [];
    @state() private _config?: JacuzziCardConfig;

    private _debouncedCallService = debounce(() => this._callTemperatureService(), 1000);

    setConfig(config: JacuzziCardConfig): void {
        this._config = {
            tap_action: { action: "toggle" },
            hold_action: { action: "more-info" },
            ...config,
        };
    }

    getCardSize(): number {
        return 1;
    }

    public static styles: CSSResultGroup = css`
        :host {
            display: block;
            box-sizing: border-box;
            position: relative;
            container: bt-jacuzzi-card / inline-size;
        }
        ha-card {
            overflow: hidden;
            height: 100%;
            width: 100%;
            vertical-align: middle;
            justify-content: center;
            justify-items: center;
            padding-left: 1em;
            padding-right: 1em;
            padding-top: 1.5em;
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: center;
            align-items: center;
        }
        bt-ha-outlined-icon-button {
            border: 1px solid var(--secondary-text-color);
            border-radius: 100%;
            padding: 0.5em;
            cursor: pointer;
        }
        .error {
            position: absolute;
            display: flex;
            flex-flow: column;
            align-items: center;
            place-content: center;
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            left: 0px;
            top: 0px;
            background: rgba(200, 200, 200, 0.16);
            border-radius: var(--ha-card-border-radius, 12px);
            border-width: var(--ha-card-border-width, 1px);
            border-style: solid;
            border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
            pointer-events: all;
            font-size: 18px;
            text-align: center;
            line-height: 1.4;
            padding: 1em;
            --mdc-icon-size: 36px;
            backdrop-filter: blur(5px);
            z-index: 4;
        }
        .more-info {
            position: absolute;
            cursor: pointer;
            top: 0px;
            right: 0px;
            inset-inline-end: 0px;
            inset-inline-start: initial;
            border-radius: 100%;
            color: var(--secondary-text-color);
            z-index: 1;
            direction: var(--direction);
        }
        bt-ha-control-circular-slider {
            --primary-color: var(--mode-color);
        }
        .content {
            position: absolute;
            width: calc(70% - 40px);
            height: calc(70% - 100px);
            box-sizing: border-box;
            border-radius: 100%;
            left: 50%;
            top: calc(50% - 20px);
            text-align: center;
            overflow-wrap: break-word;
            pointer-events: none;
            display: flex;
            align-items: center;
            place-content: center;
            flex-flow: wrap;
            z-index: 3;
            transform: translate(-50%, -50%);
            max-width: 155px;
        }
        .content > svg * {
            pointer-events: auto;
        }
        #expand .content {
            top: calc(50% - 40px);
        }
        #main {
            transform: scale(2.3);
        }
        .name {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 20px;
            word-break: keep-all;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        svg {
            height: auto;
            margin: auto;
            display: block;
            width: 100%;
            -webkit-backface-visibility: hidden;
            max-width: 233px;
        }
        path {
            stroke-linecap: round;
            stroke-width: 1;
        }
        text {
            fill: var(--primary-text-color);
        }
        .auto,
        .heat_cool {
            --mode-color: var(--state-climate-auto-color);
        }
        .cool {
            --mode-color: var(--label-badge-red);
        }
        .heat,
        .heat_cool {
            --mode-color: var(--label-badge-red);
        }
        .off {
            --mode-color: var(--slider-track-color);
        }
        .fan_only {
            --mode-color: var(--state-climate-fan_only-color);
        }
        .dry {
            --mode-color: var(--state-climate-dry-color);
        }
        .idle {
            --mode-color: var(--state-climate-idle-color);
        }
        .unknown-mode {
            --mode-color: var(--state-unknown-color);
        }
        #modes,
        #fan-modes,
        #jacuzzi-switches {
            z-index: 3;
            position: relative;
            display: flex;
            width: auto;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.15em;
        }
        #modes {
            margin-top: -3em;
            margin-bottom: 0.35em;
        }
        #fan-modes {
            margin-bottom: 0.35em;
        }
        #jacuzzi-switches {
            margin-bottom: 0.75em;
        }
        #bt-control-buttons {
            z-index: 3;
            position: relative;
            display: flex;
            width: auto;
            justify-content: center;
            padding-bottom: 0.2em;
        }
        #bt-control-buttons .button {
            z-index: 3;
            position: relative;
            display: flex;
            width: auto;
            justify-content: center;
            padding: 1em;
            padding-top: 0.2em;
        }
        #modes > *,
        #fan-modes > *,
        #jacuzzi-switches > * {
            color: var(--disabled-text-color);
            cursor: pointer;
            display: inline-block;
        }
        #modes .selected-icon,
        #fan-modes .selected-icon,
        #jacuzzi-switches .switch-on {
            color: var(--mode-color);
        }
        .status {
            transition: fill 0.6s ease-in-out, filter 0.6s ease-in-out;
            filter: none;
        }
        .status.active {
            fill: var(--error-color);
            filter: drop-shadow(0px 0px 6px var(--error-color));
        }
        line {
            stroke: var(--disabled-text-color);
        }
        ha-icon-button {
            transition: color 0.6s ease-in-out;
        }
        @container bt-jacuzzi-card (max-width: 280px) {
            .content {
                top: calc(50% - 10px);
            }
        }
        @container bt-jacuzzi-card (max-width: 255px) {
            #modes {
                margin-top: -2em;
            }
            ha-card {
                padding-top: 2em;
            }
        }
    `;

    private _vibrate(delay: number) {
        try {
            navigator.vibrate(delay);
        } catch {
            /* ignore */
        }
    }

    public willUpdate(changedProps: PropertyValues) {
        if (!this.hass || !this._config) return;
        if (!changedProps.has("hass") && !changedProps.has("_config")) return;

        const entity_id = this._config.entity;
        if (!entity_id) return;

        const stateObj = this.hass.states[entity_id] as ClimateEntity | undefined;
        if (!stateObj) return;

        this.stateObj = stateObj;
        const attributes = this.stateObj.attributes;
        this.mode = this.stateObj.state || "off";
        this.modes = attributes.hvac_modes ? Object.values(attributes.hvac_modes) : [];
        this.value = {
            value: attributes.temperature ?? 0,
        };
        if (attributes.target_temp_step !== undefined) {
            this.step = attributes.target_temp_step;
        }
        if (attributes.min_temp !== undefined) {
            this.min = attributes.min_temp;
        }
        if (attributes.max_temp !== undefined) {
            this.max = attributes.max_temp;
        }
        if (attributes.current_temperature !== undefined) {
            this.current = attributes.current_temperature;
        }
        const humidity = attributes.current_humidity ?? attributes.humidity;
        if (humidity !== undefined) {
            this.current_humidity = parseFloat(String(humidity));
        } else {
            this.current_humidity = 0;
        }
        const fm = attributes.fan_modes;
        this._fanModes = Array.isArray(fm) ? [...fm] : [];
        this._fanMode = attributes.fan_mode ?? "";

        this._syncErrorOverlay();
        this._updateDisplay();
    }

    private _syncErrorOverlay() {
        const id = this._config?.error_entity;
        if (!id || !this.hass?.states[id]) {
            this._errorOverlay = null;
            return;
        }
        const st = this.hass.states[id].state;
        if (st === UNAVAILABLE || st === UNKNOWN) {
            this._errorOverlay = null;
            return;
        }
        if (st === "0" || st === "none" || st === "") {
            this._errorOverlay = null;
            return;
        }
        this._errorOverlay = st;
    }

    private _updateDisplay() {
        const setpoint = this.value.value ?? 0;
        if (this._config?.set_current_as_main) {
            this._display_bottom = setpoint;
            this._display_top = this.current;
        } else {
            this._display_bottom = this.current;
            this._display_top = setpoint;
        }
    }

    private _highChanged(ev: CustomEvent) {
        const val = (ev.detail as { value?: number }).value;
        if (val === undefined || isNaN(val)) return;
        this.value = { value: val };
        this._updateDisplay();
        this.hass.callService("climate", "set_temperature", {
            entity_id: this._config!.entity,
            temperature: val,
        });
    }

    private _highChanging(ev: CustomEvent) {
        const val = (ev.detail as { value?: number }).value;
        if (val === undefined || isNaN(val)) return;
        this.value = { value: val };
        this._updateDisplay();
        this._vibrate(20);
    }

    private _callTemperatureService() {
        if (this.value.value === undefined || !this._config?.entity) return;
        this.hass.callService("climate", "set_temperature", {
            entity_id: this._config.entity,
            temperature: this.value.value,
        });
    }

    private _handleButton(ev: Event) {
        const step = (ev.currentTarget as HTMLElement & { step?: number }).step ?? this.step;
        let temp = this.value.value ?? this.min;
        temp += step;
        temp = clamp(temp, this.min, this.max);
        this.value = { value: temp };
        this._updateDisplay();
        this._vibrate(40);
        this._debouncedCallService();
    }

    private _setHvacMode(mode: string) {
        if (!this._config?.entity) return;
        this.hass.callService("climate", "set_hvac_mode", {
            entity_id: this._config.entity,
            hvac_mode: mode,
        });
    }

    private _setFanMode(fan_mode: string) {
        if (!this._config?.entity) return;
        this.hass.callService("climate", "set_fan_mode", {
            entity_id: this._config.entity,
            fan_mode,
        });
    }

    private _toggleSwitchEntity(entity_id: string) {
        this.hass.callService("switch", "toggle", { entity_id });
        this._vibrate(30);
    }

    private _handleMoreInfo() {
        fireEvent(this, "hass-more-info", { entityId: this._config!.entity });
    }

    private _renderHVACAction(full = false): TemplateResult {
        const isHeating = this.stateObj?.attributes.hvac_action === "heating" && this.mode !== "off";
        const transform = full ? "translate(-3,-3.5) scale(0.25)" : "translate(5,-4) scale(0.25)";
        const fill = "#9d9d9d";
        const label = isHeating
            ? localize({ hass: this.hass, string: "extra_states.heating" })
            : localize({ hass: this.hass, string: "extra_states.heating_off" });
        return svg`<path class="status ${isHeating ? "active" : ""}" transform="${transform}" fill="${fill}" d="${mdiHeatWave}" title="Heat"><title>${label}</title></path>`;
    }

    private _renderModeIcon(mode: string, currentMode: string): TemplateResult {
        const path = modeIcons[mode];
        if (!path) return html``;
        const localizeMode =
            this.hass!.localize(`component.climate.state._.${mode}`) ||
            localize({ hass: this.hass, string: `extra_states.${mode}` });
        return html`
            <ha-icon-button
                title="${currentMode === mode ? mode : ""}"
                class=${classMap({ "selected-icon": currentMode === mode })}
                @click=${() => this._setHvacMode(mode)}
                tabindex="0"
                .path=${path}
                .label=${localizeMode}
            ></ha-icon-button>
        `;
    }

    private _renderFanChip(mode: string): TemplateResult {
        const selected = this._fanMode === mode;
        return html`
            <ha-icon-button
                class=${classMap({ "selected-icon": selected })}
                @click=${() => this._setFanMode(mode)}
                tabindex="0"
                .path=${mdiFan}
                title=${mode}
                .label=${mode}
            ></ha-icon-button>
        `;
    }

    private _renderSwitch(slot: SwitchSlot, entityId: string | undefined): TemplateResult {
        if (!entityId) return html``;
        const st = this.hass.states[entityId];
        const on = st?.state === "on";
        const path = SWITCH_ICONS[slot];
        const name = st?.attributes?.friendly_name ?? slot;
        return html`
            <ha-icon-button
                class=${classMap({ "switch-on": on })}
                @click=${() => this._toggleSwitchEntity(entityId)}
                tabindex="0"
                .path=${path}
                .label=${name}
                title=${name}
            ></ha-icon-button>
        `;
    }

    protected render(): TemplateResult {
        if (!this._config?.entity || !this.hass) {
            return html`<ha-card><div class="name">Jacuzzi</div></ha-card>`;
        }

        const cfg = this._config;
        const showFan = !cfg.hide_fan && this._fanModes.length > 0;
        const mainTempLabel = cfg.set_current_as_main
            ? localize({ hass: this.hass, string: "common.current_temperature" })
            : localize({ hass: this.hass, string: "common.target_temperature" });
        const mainValue = svg`
      <text class="main-value" x="62.5" y="60%" dominant-baseline="middle" text-anchor="middle" style="font-size:15px;">
        <title>${mainTempLabel}</title>
        ${formatNumber(this._display_top, this.hass.locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
        <tspan dx="-2" dy="-5.5" style="font-size: 5px;">${this.hass.config.unit_system.temperature}</tspan>
      </text>`;
        const unavailableMessage =
            this.stateObj?.state === UNAVAILABLE || this.stateObj?.state === UNKNOWN
                ? svg`<text x="62.5" y="63%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
        ${this.hass.localize("state.default.unavailable")}
      </text>`
                : svg``;
        const seperator = svg`<line x1="35" y1="72" x2="90" y2="72" stroke="#e7e7e8" stroke-width="0.5" />`;
        const lowerTempLabel = cfg.set_current_as_main
            ? localize({ hass: this.hass, string: "common.target_temperature" })
            : localize({ hass: this.hass, string: "common.current_temperature" });
        const lowerContent =
            this.current_humidity > 0
                ? svg`
    <g class="current-info" transform="translate(62.5,80)">
      <text x="-12.25%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
        <title>${lowerTempLabel}</title>
        ${formatNumber(this._display_bottom, this.hass.locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
        <tspan dx="-0.3" dy="-2" style="font-size: 3px;">${this.hass.config.unit_system.temperature}</tspan>
      </text>
      <text x="12.25%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
        <title>${localize({ hass: this.hass, string: "common.current_humidity" })}</title>
        ${formatNumber(this.current_humidity, this.hass.locale, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
        <tspan dx="-0.3" dy="-2" style="font-size: 3px;">%</tspan>
      </text>
      ${this._renderHVACAction(true)}
    </g>`
                : svg`
    <g class="current-info" transform="translate(62.5,80)">
      <text x="-5%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
        <title>${lowerTempLabel}</title>
        ${formatNumber(this._display_bottom, this.hass.locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
        <tspan dx="-1" dy="-2" style="font-size: 3px;">${this.hass.config.unit_system.temperature}</tspan>
      </text>
      ${this._renderHVACAction()}
    </g>`;

        const modes = html`<div id="modes">
            ${this.modes.map((m) => {
                if (cfg.disable_heat && (m === "heat" || m === "heat_cool")) return html``;
                if (cfg.disable_off && m === "off") return html``;
                return this._renderModeIcon(m, this.mode);
            })}
        </div>`;

        const fanRow = showFan
            ? html`<div id="fan-modes">${this._fanModes.map((m) => this._renderFanChip(m))}</div>`
            : html``;

        const switches = html`<div id="jacuzzi-switches">
            ${this._renderSwitch("power", cfg.power)} ${this._renderSwitch("jets", cfg.jets)} ${this._renderSwitch("filter", cfg.filter)}
            ${this._renderSwitch("bubbles", cfg.bubbles)} ${this._renderSwitch("sanitizer", cfg.sanitizer)}
        </div>`;

        const hasAnySwitch = !!(cfg.power || cfg.jets || cfg.filter || cfg.bubbles || cfg.sanitizer);

        const buttons = cfg.disable_buttons
            ? html``
            : html`
                  <div id="bt-control-buttons">
                      <div class="button">
                          <bt-ha-outlined-icon-button .target=${this.target} .step=${-this.step} @click=${this._handleButton}>
                              <ha-svg-icon .path=${mdiMinus}></ha-svg-icon>
                          </bt-ha-outlined-icon-button>
                      </div>
                      <div class="button">
                          <bt-ha-outlined-icon-button .target=${this.target} .step=${this.step} @click=${this._handleButton}>
                              <ha-svg-icon .path=${mdiPlus}></ha-svg-icon>
                          </bt-ha-outlined-icon-button>
                      </div>
                  </div>
              `;

        return html`
            <ha-card id="${cfg.disable_buttons ? "" : "expand"}" class=${classMap({ [this.mode]: true })}>
                ${cfg.disable_menu
                    ? html``
                    : html`<ha-icon-button
                          class="more-info"
                          .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
                          .path=${mdiDotsVertical}
                          @click=${this._handleMoreInfo}
                          tabindex="0"
                      ></ha-icon-button>`}
                <div class="name">${cfg.name?.length ? cfg.name : html`&nbsp;`}</div>
                <bt-ha-control-circular-slider
                    .mode=${"start" as const}
                    @value-changed=${this._highChanged}
                    @value-changing=${this._highChanging}
                    .value=${this.value.value}
                    .current=${this.current}
                    step=${this.step}
                    min=${this.min}
                    max=${this.max}
                >
                    <div class="content">
                        <svg id="main" viewbox="0 0 125 100">
                            ${mainValue} ${unavailableMessage} ${seperator} ${lowerContent}
                        </svg>
                    </div>
                    ${this._errorOverlay
                        ? html`
                              <div class="error">
                                  <span>${localize({ hass: this.hass, string: "jacuzzi.error_code" })}</span>
                                  <span>${this._errorOverlay}</span>
                              </div>
                          `
                        : html``}
                </bt-ha-control-circular-slider>
                ${modes} ${fanRow} ${hasAnySwitch ? switches : html``} ${buttons}
            </ha-card>
        `;
    }
}
