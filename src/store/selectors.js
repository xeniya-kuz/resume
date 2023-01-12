export function getCurrentLanguage(state) {
    return state.languageReducer.language;
}

export function getActiveSection(state) {
    return state.animationReducer.sectionIn;
}

export function getInactiveSection(state) {
    return state.animationReducer.sectionOut;
}

export function getFirstView(state) {
    return state.animationReducer.indx;
}
