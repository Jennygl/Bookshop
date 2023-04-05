import { createContext } from 'react'
import { translations } from './translations'
// Exporterar funktionaliteten till createContext
export const LanguageContext = createContext(translations.english)
