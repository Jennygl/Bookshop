import React from 'react'
import styled from 'styled-components'
import LanguageContent from '../components/LanguageContent'

function MapComp() {
    return (
        <Section>
            <Adress>
                <h3>
                    <LanguageContent contentID="map" />
                </h3>
                <p>
                    <LanguageContent contentID="shop" />
                </p>
                <p>Lilla torget 1</p>
                <p>761 30 Norrtälje</p>
            </Adress>
            <Mapdiv>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012.7975831569892!2d18.70485286113959!3d59.75785335210795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465ff64cbf9aaaab%3A0x9bc6191efebb5230!2sRoslagens%20bokhandel%20vid%20Lilla%20torget%20i%20Norrt%C3%A4lje!5e0!3m2!1ssv!2sse!4v1680522946970!5m2!1ssv!2sse"
                    width={200}
                    height={250}
                    title="Karta"
                    // allowfullscreen=""
                    // loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </Mapdiv>
        </Section>
    )
}

export default MapComp

const Adress = styled.div`
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
const Section = styled.section`
    /* margin-right: 20px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50vw;
    margin: 2vh auto 2vh auto;
    border-radius: 5px;
    /* border: 2px solid palevioletred; */
    @media screen and (max-width: 700px) {
        width: 90vw;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`
const Mapdiv = styled.div`
    /* display:flex; */
    object-fit: contain;
    width: 20vw;
    height: 35vh;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`
