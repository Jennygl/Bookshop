import React from 'react'
import styled from 'styled-components'
import shop from '../assets/shop.jpg'
import LanguageContent from './LanguageContent'

function FormComp() {
    return (
        <>
            <Section>
                <Img
                    src={shop}
                    // className="Hero-image"
                    style={{ resizeMode: 'cover' }}
                    alt="Roslagens bokhandel"
                />
                <Open>
                    <OpenTitle>
                        <LanguageContent contentID="open" />
                    </OpenTitle>

                    <OpenList>
                        <li>
                            <LanguageContent contentID="week" />:{' '}
                            <span>10-18</span>
                        </li>
                        <li>
                            <LanguageContent contentID="sat" />:{' '}
                            <span>10-15</span>
                        </li>
                        <li>
                            <LanguageContent contentID="sun" />:{' '}
                            <span>
                                <LanguageContent contentID="closed" />
                            </span>
                        </li>
                    </OpenList>
                </Open>
            </Section>
        </>
    )
}
export default FormComp

// Formulär och bild
const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50vw;
    margin: 5vh auto 5vh auto;
    border-radius: 5px;
    border: 2px solid palevioletred;
    @media screen and (max-width: 700px) {
        width: 90vw;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`
const OpenTitle = styled.h3`
    display: block;
`
const Open = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    color: black;
    margin: 0;
    padding: 0.25em 1em;
    cursor: pointer;
    width: 100%;
    height: 35vh;
`
const OpenList = styled.ul`
    list-style-type: none;
    padding: 2vh 0 0 0;
`

// Böcker, bild bredvid formulär
const Img = styled.img`
    object-fit: cover;
    width: 20vw;
    height: 35vh;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`
