import { LANGUAGES } from "../utils/constants";
import { ANIMATION_IN, ANIMATION_OUT, CHANGE_LANGUAGE, FIRST_VIEW } from "./actions";


const languageState = {
    language: LANGUAGES[0]
}

export const languageReducer = (state = languageState, { type, payload }) => {
    switch (type) {
        case CHANGE_LANGUAGE:
            return {
                language: payload,
            };
        default:
            return state;
    }
}


const animationState = {
    sectionIn: '',
    sectionOut: '',
    indx: 0
}

export const animationReducer = (state = animationState, { type, payload }) => {
    switch (type) {
        case ANIMATION_IN:
            return {
                ...state,
                sectionIn: payload,
            };
        case ANIMATION_OUT:
            return {
                ...state,
                sectionOut: payload,
            };
        case FIRST_VIEW:
            return {
                ...state,
                indx: payload,
            };
        default:
            return state;
    }
}