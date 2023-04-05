import React from 'react'
import FormComp from '../components/FormComp'
import MapComp from '../components/MapComp'
import styled from 'styled-components'

function Contact() {
    return (
        <>
            <ConDiv>
                <Adress>
                    <h3>Hitta hit</h3>
                    <p>Roslagens bokhandel vid Lilla torget i Norrtälje</p>
                    <p>Lilla torget 1</p>
                    <p>761 30 Norrtälje</p>
                </Adress>

                <Map>
                    <MapComp />
                </Map>
            </ConDiv>
            <FormComp />
        </>
    )
}

export default Contact

const ConDiv = styled.div`
    /* position: relative; */
    /* margin: 25vh 0 0 5vw; */
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: auto;
    border-radius:5px
    justify-content: center;
    margin-top: 25vh;
    @media screen and (max-width: 600px) {
        width:90vw;
    }
    @media screen and (max-width: 500px) {
        flex-direction:column;
    }
`

const Adress = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    text-align: start;
    justify-content: center;
    color: black;
    margin: 0;
    padding: 0.25em 1em;
    cursor: pointer;
    width: 60%;
    height: 35vh;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`
const Map = styled.div`
    /* width: 20vw;
    height: 35vh; */
    border-radius: 5px;
`
