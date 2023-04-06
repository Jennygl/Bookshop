import React from 'react'
import styled from 'styled-components'
import { LanguageButton } from './LanguageButton'
import LanguageContent from './LanguageContent'

function FooterComp(props) {
    return (
        <Footer>
            <LanguageContent contentID="language" />: <LanguageButton /> -
            <LanguageContent contentID="changeLang" />
            <div className="contact">
                <p>
                    <LanguageContent contentID="roslagens" />{' '}
                    <LanguageContent contentID="square" />
                </p>
                <p>Lilla torget 1</p>
                <p>761 30 Norrtälje</p>
            </div>
            <div className="social">
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <Copy>
                &copy; Jenny Grinde Lensing. Senast uppdaterad {props.date}
            </Copy>
        </Footer>
    )
}

export default FooterComp

const Footer = styled.footer`
    position: relative;
    /* bottom: 0px;
    left: 0px; */
    width: 100vw;
    text-align: center;
`
const Copy = styled.p`
    color: grey;
`
