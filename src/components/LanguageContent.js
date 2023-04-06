import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import { translations } from './translations.js'

export default function LanguageContent({ contentID }) {
    const { language } = useContext(LanguageContext)

    return translations[language][contentID]
}
