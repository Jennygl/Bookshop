import React, { useState } from 'react'
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
                    <h3>
                        <LanguageContent contentID="open" />
                    </h3>
                    <p>
                        <LanguageContent contentID="week" />: <span>10-18</span>
                    </p>
                    <p>
                        <LanguageContent contentID="sat" />: <span>10-15</span>
                    </p>
                    <p>
                        <LanguageContent contentID="sun" />:{' '}
                        <span>
                            <LanguageContent contentID="closed" />
                        </span>
                    </p>
                </Open>
            </Section>
        </>
    )
}
export default FormComp

// Formulär och bild
const Section = styled.section`
    /* margin-right: 20px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50vw;
    margin: auto;
    border-radius: 5px;
    border: 2px solid palevioletred;
    @media screen and (max-width: 700px) {
        width: 90vw;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`

const Open = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    /* text-align: start; */
    /* justify-content: center; */
    /* align-content: center; */
    color: black;
    margin: 0;
    padding: 0.25em 1em;
    cursor: pointer;
    width: 100%;
    height: 35vh;
    /* @media screen and (max-width: 500px) {
        width: 100%;
    } */
`

// Böcker, bild bredvid formulär
const Img = styled.img`
    /* display:flex; */
    object-fit: cover;
    width: 20vw;
    height: 35vh;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`
