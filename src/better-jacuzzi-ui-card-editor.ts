import { LitElement, html, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import memoizeOne from "memoize-one";
import { assert } from "superstruct";
import { fireEvent, LovelaceCardEditor, atLeastHaVersion, HomeAssistant } from "./ha";
import setupCustomlocalize from "./localize/localize";
import { JacuzziCardConfig, jacuzziCardConfigStruct } from "./jacuzzi-card-config";

const GENERIC_LABELS = [
    "icon_color",
    "layout",
    "fill_container",
    "primary_info",
    "secondary_info",
    "icon_type",
    "content_info",
    "use_entity_picture",
    "collapsible_controls",
    "icon_animation",
];

const loadHaComponents = (version: string) => {
    if (
        !customElements.get("ha-form") ||
        (!customElements.get("hui-action-editor") && !atLeastHaVersion(version, 2022, 11))
    ) {
        (customElements.get("hui-button-card") as any)?.getConfigElement();
    }
    if (!customElements.get("ha-entity-picker")) {
        (customElements.get("hui-entities-card") as any)?.getConfigElement();
    }
};

const JACUZZI_LABELS = [
    "power",
    "jets",
    "filter",
    "bubbles",
    "sanitizer",
    "error_entity",
    "hide_fan",
    "disable_menu",
    "disable_buttons",
    "set_current_as_main",
    "disable_heat",
    "disable_off",
] as string[];

const computeSchema = memoizeOne(
    (): any[] => [
        { name: "entity", selector: { entity: { domain: ["climate"] } } },
        { name: "name", selector: { text: {} } },
        {
            type: "grid",
            name: "",
            schema: [
                { name: "power", selector: { entity: { domain: ["switch"] } } },
                { name: "jets", selector: { entity: { domain: ["switch"] } } },
                { name: "filter", selector: { entity: { domain: ["switch"] } } },
                { name: "bubbles", selector: { entity: { domain: ["switch"] } } },
                { name: "sanitizer", selector: { entity: { domain: ["switch"] } } },
                { name: "error_entity", selector: { entity: { domain: ["sensor"] } } },
            ],
        },
        {
            type: "grid",
            name: "",
            schema: [
                { name: "hide_fan", selector: { boolean: {} } },
                { name: "disable_menu", selector: { boolean: {} } },
                { name: "disable_buttons", selector: { boolean: {} } },
                { name: "set_current_as_main", selector: { boolean: {} } },
                { name: "disable_heat", selector: { boolean: {} } },
                { name: "disable_off", selector: { boolean: {} } },
            ],
        },
    ],
);

@customElement("better-jacuzzi-ui-card-editor")
export class JacuzziCardEditor extends LitElement implements LovelaceCardEditor {
    @state() private _config?: JacuzziCardConfig;
    @property({ attribute: false }) public hass!: HomeAssistant;

    connectedCallback() {
        super.connectedCallback();
        void loadHaComponents(this.hass.connection.haVersion);
    }

    public setConfig(config: JacuzziCardConfig): void {
        assert(config, jacuzziCardConfigStruct);
        this._config = config;
    }

    private _computeLabel = (schema: any) => {
        const customLocalize = setupCustomlocalize(this.hass!);

        if (GENERIC_LABELS.includes(schema.name)) {
            return customLocalize(`editor.card.generic.${schema.name}`);
        }
        if (JACUZZI_LABELS.includes(schema.name)) {
            return customLocalize(`editor.card.jacuzzi.${schema.name}`);
        }
        return this.hass!.localize(`ui.panel.lovelace.editor.card.generic.${schema.name}`);
    };

    protected render(): TemplateResult {
        if (!this.hass || !this._config) {
            return html``;
        }

        const schema = computeSchema();

        return html`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${schema}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `;
    }

    private _valueChanged(ev: CustomEvent): void {
        fireEvent(this, "config-changed", { config: ev.detail.value });
        fireEvent(this, "hass", { config: ev.detail.value });
    }
}
