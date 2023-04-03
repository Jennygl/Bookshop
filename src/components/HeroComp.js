// Detta behövs inte efter version 17
import React from 'react'
import styled from 'styled-components'
import bokhandel from '../roslagensbok.jpeg'
import bokhylla from '../assets/bookcase.jpeg'

function HeroComp() {
    return (
        <>
            {/* div.classname enter */}
            <Section>
                <Hero
                    src={bokhandel}
                    className="Hero-image"
                    // style={{ resizeMode: 'cover' }}
                    alt="Roslagens bokhandel"
                />

                <Masked>
                    <Text className="text">Roslagens bokhandel</Text>
                    <Subtext className="subText">
                        vid Lilla torget i Norrtälje
                    </Subtext>
                </Masked>
            </Section>
        </>
    )
}

export default HeroComp

const Section = styled.section`
    box-sizing: border-box;
    height: 80vh;
    width: 100vw;
    /* margin: 0 10vw 0 10vw */
    /* align-content:center; */
`
// const HeroDiv = styled.div`
//     background-image: radial-gradient(
//         circle,
//         rgba(169, 168, 169, 0.8) 10%,
//         rgba(255, 255, 255, 0)
//     );
//     width: 35%;
//     /* height: 100%; */
//     position: relative;
//     top: 8vh;
//     display: flex;
//     align-items: center;
//     margin-left: auto;
//     margin-right: 10vw;
//     object-fit: contain;
// `
// Formulär och bild
const Hero = styled.img`
    width: 35vw;
    height: 100%;
    position: relative;
    top: 8vh;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 10vw;
    z-index: -1;
    object-fit: contain;
    border-radius: 20px;
`

const Text = styled.p`
    font-weight: bolder;
    line-height: 15vh;
    background-image: url(${bokhylla});
    font-size: 7em;

    /* padding-top: auto;
    padding-bottom: auto; */
    margin: 0vw;
    margin-left: 5vw;
    border: 4px solid;
    background-size: contain;
    width: 100%;
    height: 30%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    z-index: 100;
    align-items: center;
    text-align: center;
    display: flex;
`
const Subtext = styled.p`
    font-size: 2em;
    z-index: 101;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 15vw;
`
const Masked = styled.div`
    /* margin-top: 15vh; */
    /* justify-self: center; */
    /* align-self: center; */
    align-content: center;
    /* text-align: center: */
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    position: absolute;
    top: 8vh;
    /* left: 10vw; */
    height: 100%;
    width: 50%;
    z-index: 10;
    /* background-image: radial-gradient(circle, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) ); */
`
