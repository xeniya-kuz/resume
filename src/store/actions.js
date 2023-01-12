export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const ANIMATION_IN = "ANIMATION_IN";
export const ANIMATION_OUT = "ANIMATION_OUT";
export const FIRST_VIEW = "FIRST_VIEW";



export const changeLanguage = (language) => ({
    type: CHANGE_LANGUAGE,
    payload: language
});

export const animationIn = (section) => ({
    type: ANIMATION_IN,
    payload: section
});

export const animationOut = (section) => ({
    type: ANIMATION_OUT,
    payload: section
});

export const firstView = (num) => ({
    type: FIRST_VIEW,
    payload: num
});