import React from 'react'
import styled from 'styled-components'
import { LanguageButton } from './LanguageButton'
import LanguageContent from './LanguageContent'

function FooterComp(props) {
    return (
        <>
            <Footer>
                <LanguageContent contentID="language" />: <LanguageButton /> -
                <LanguageContent contentID="changeLang" />
                <Contact className="contact">
                    <p>
                        <LanguageContent contentID="roslagens" />{' '}
                        <LanguageContent contentID="square" />
                    </p>
                    <p>Lilla torget 1</p>
                    <p>761 30 Norrtälje</p>
                </Contact>
                <Social className="social">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </Social>
                <Copy>
                    &copy; Jenny Grinde Lensing. Senast uppdaterad {props.date}
                </Copy>
            </Footer>
        </>
    )
}

export default FooterComp

const Footer = styled.footer`
    position: relative;
    bottom: 0px;
    width: 100vw;
    /* z-index: -1; */
    background: linear-gradient(#ffffff, #707070);
    text-align: center;
    padding: 10px;
    @media screen and (max-width: 430px) {
        font-size: 0.8em;
    }
`
const Copy = styled.p`
    @media screen and (max-width: 430px) {
        font-size: 0.8em;
    }
`
const Contact = styled.div`
    line-height: 0.7;
`

const Social = styled.div`
    font-size: 2em;
`
