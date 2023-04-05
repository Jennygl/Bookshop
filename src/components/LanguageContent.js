import { useContext } from 'react'
import { LanguageContext } from './multilingualContext'
import { translations } from './translations.js'

export default function LanguageContent({ contentID }) {
    const { language } = useContext(LanguageContext)

    return translations[language][contentID]
}
