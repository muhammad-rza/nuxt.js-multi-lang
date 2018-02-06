
export const state = () => ({
    locales: ['az', 'en'],
    locale: 'az'
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}