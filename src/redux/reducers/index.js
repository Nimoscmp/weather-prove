import { theme } from "../states/initialStates";
import { types } from "../types/types";

export function selectThemeReducer(state = theme, action) {
    switch (action.type) {
        case types.SELECT_DARK_THEME:
            return true;
        case types.SELECT_LIGHT_THEME:
            return false;
        default:
            return state;
    }
}