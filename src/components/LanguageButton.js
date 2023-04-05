import React, { useContext } from 'react'
import { LanguageContext } from './multilingualContext'
import styled from 'styled-components'

export const LanguageButton = () => {
    const { language, toggleLanguage } = useContext(LanguageContext)

    return (
        <>
            <Button onClick={toggleLanguage}> {language} </Button>
        </>
    )
}

const Button = styled.button`
   margin: 10px;
`
