// Detta behövs inte efter version 17
import React from 'react'
import MaskedText from './MaskedText'
import styled from 'styled-components'
import bokhandel from '../roslagensbok.jpeg'
// import bokhylla from '../assets/bookcase.jpeg'

function HeroComp() {
    return (
        <>
            {/* div.classname enter */}
            <Section>
                <MaskedText></MaskedText>
                {/* <Masked>
                    <Text>Roslagens bokhandel</Text>
                    <Subtext>vid Lilla torget i Norrtälje</Subtext>
                </Masked> */}
                <Hero
                    src={bokhandel}
                    className="Hero-image"
                    // style={{ resizeMode: 'cover' }}
                    alt="Roslagens bokhandel"
                />
            </Section>
        </>
    )
}

export default HeroComp

const Section = styled.section`
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    position: relative;
    top: 15vh;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

const Hero = styled.img`
    width: 40vw;
    height: 70vh;
    @media screen and (max-width: 900px) {
        width: 50vw;
        height: 70vh;
    }
    @media screen and (max-width: 600px) {
        width: 60vw;
        height: 70vh;
    }
    @media screen and (max-width: 480px) {
        width: 60vw;
        height: 40vh;
    }
    padding: 20px;
    display: flex;
    align-self: center;
    z-index: -1;
    border-radius: 100%;
`
