import React, { useContext } from 'react'
import { LanguageContext } from './multilingualContext'

export const LanguageButton = () => {
    const { language, toggleLanguage } = useContext(LanguageContext)

    return (
        <>
            <button onClick={toggleLanguage}> {language} </button>
        </>
    )
}
