import { Infer, any, assign, boolean, number, object, optional, string } from "superstruct";
import { LovelaceCardConfig } from "./ha";

const lovelaceCardConfigStruct = object({
    index: optional(number()),
    view_index: optional(number()),
    view_layout: any(),
    type: string(),
});

const entitySharedConfigStruct = object({
    entity: optional(string()),
    name: optional(string()),
});

type EntitySharedConfig = Infer<typeof entitySharedConfigStruct>;

export type JacuzziCardConfig = LovelaceCardConfig &
    EntitySharedConfig & {
        power?: string;
        jets?: string;
        filter?: string;
        bubbles?: string;
        sanitizer?: string;
        error_entity?: string;
        hide_fan?: boolean;
        disable_menu?: boolean;
        disable_buttons?: boolean;
        set_current_as_main?: boolean;
        disable_heat?: boolean;
        disable_off?: boolean;
    };

export const jacuzziCardConfigStruct = assign(
    lovelaceCardConfigStruct,
    entitySharedConfigStruct,
    object({
        power: optional(string()),
        jets: optional(string()),
        filter: optional(string()),
        bubbles: optional(string()),
        sanitizer: optional(string()),
        error_entity: optional(string()),
        hide_fan: optional(boolean()),
        disable_menu: optional(boolean()),
        disable_buttons: optional(boolean()),
        set_current_as_main: optional(boolean()),
        disable_heat: optional(boolean()),
        disable_off: optional(boolean()),
    }),
);
