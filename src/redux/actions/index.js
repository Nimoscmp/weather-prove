import { types } from "../types/types";

export const select_dark_theme_action = () => async(dispatch) => {
    dispatch({
        type: types.SELECT_DARK_THEME
    })
}

export const select_light_theme_action = () => async(dispatch) => {
    dispatch({
        type: types.SELECT_LIGHT_THEME
    })
}