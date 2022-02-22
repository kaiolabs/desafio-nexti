import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Componente responsável por gerenciar  e defini os temas da aplicação.

import { messages } from './languages'

i18n
    .use(LanguageDetector)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: 'pt',
        ns: ['translations'],
        resources: messages
    })

export { i18n }
