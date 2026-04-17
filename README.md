# Better Jacuzzi UI Card

Lovelace card for **spa / hot tub** control in [Home Assistant](https://www.home-assistant.io/): circular **climate** thermostat UI (same interaction pattern as common HA climate cards), optional **fan** modes from the climate entity, optional **switch** tiles (power, jets, filter, bubbles, sanitizer), and optional **error** sensor overlay.

Typical source: **Local Tuya** (or any integration) exposing a `climate` entity plus `switch` helpers.

## Install (HACS)

1. Add this repository as a [custom repository](https://hacs.xyz/docs/faq/custom_repositories/) (category: **Lovelace** / plugin).
2. Install **Better Jacuzzi UI**.
3. Add the resource (or let HACS add it):  
   `/local/community/better-jacuzzi-ui-card/better-jacuzzi-ui-card.js`  
   (exact path depends on your HACS folder layout.)

## Configure

| Name | Type | Description |
| ---- | ---- | ----------- |
| `type` | string | **Required.** `custom:better-jacuzzi-ui-card` |
| `entity` | string | **Required.** Climate entity ID. |
| `name` | string | Optional title above the ring. |
| `power` | string | Optional `switch.*` — only shown if set. |
| `jets` | string | Optional `switch.*` |
| `filter` | string | Optional `switch.*` |
| `bubbles` | string | Optional `switch.*` |
| `sanitizer` | string | Optional `switch.*` |
| `error_entity` | string | Optional `sensor.*` — overlay when state is not `0`, empty, `none`, `unknown`, or `unavailable`. |
| `hide_fan` | boolean | Hide fan speed row even if `fan_modes` exist. |
| `disable_menu` | boolean | Hide the more-info (⋮) button. |
| `disable_buttons` | boolean | Hide ± temperature buttons. |
| `set_current_as_main` | boolean | Swap emphasis of current vs target temperature in the ring. |
| `disable_heat` | boolean | Hide heat / heat_cool mode buttons. |
| `disable_off` | boolean | Hide off mode button. |

Example:

```yaml
type: custom:better-jacuzzi-ui-card
entity: climate.thermostat
name: Spa
power: switch.power
jets: switch.jets
filter: switch.filter
bubbles: switch.bubbles
sanitizer: switch.sanitizer
error_entity: sensor.error_code
```

## Development

```bash
npm install --legacy-peer-deps
npm run build
```

Output: `dist/better-jacuzzi-ui-card.js`.

## Translations

Strings live under `src/localize/languages/`. The visual editor uses `editor.card.jacuzzi.*` in `en.json` / `hu.json` (other locales fall back as in the existing JSON structure).

## Fork note

This project was split from a thermostat-focused codebase; the bundle now contains **only** `better-jacuzzi-ui-card`. After you create the new GitHub repository, set `package.json` → `repository.url` to your clone URL and adjust any badge links you add to this README.
