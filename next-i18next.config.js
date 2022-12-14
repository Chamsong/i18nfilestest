
const I18NextHttpBackend = require('i18next-http-backend/cjs')
const isBrowser = typeof window !== 'undefined'

//LOCAL VERSION 

/* module.exports = {
    debug: process.env.NODE_ENV === 'development',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    i18n: {
        defaultLocale: 'ca',
        locales: ['ca', 'es', 'en'],
        localeDetection: false,
    },
    ns: ['translation'],
    defaultNS: 'translation',
    serializeConfig: false,
} */


// VERSION WITH HTTP FETCH
module.exports = {
    debug: process.env.NODE_ENV === 'development',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        localeDetection: false,
    },
    ns: ['translation'],
    defaultNS: 'translation',
    react: {
        useSuspense: true,
    },
    backend: isBrowser ? {
        loadPath: 'http://localhost:3000/api/{{ns}}/{{lng}}',
        requestOptions: {
            cache: 'default',
            credentials: 'same-origin',
            mode: 'no-cors',
        } ,
    } : undefined,
    serializeConfig: false,
    use: isBrowser ? [I18NextHttpBackend] : [],
}