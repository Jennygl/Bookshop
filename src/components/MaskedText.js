import React from 'react'
import styled from 'styled-components'
import bokhylla from '../assets/bookcase.jpeg'

function MaskedText() {
    return (
        <>
            <Masked>
                <Text className="text">Roslagens bokhandel</Text>
                <Subtext className="subText">
                    vid Lilla torget i Norrtälje
                </Subtext>
            </Masked>
        </>
    )
}

export default MaskedText
const Masked = styled.div`
    /* margin-top: 15vh; */
    align-items: center;
    justify-content: center;
    text-align: center;
    /* align-content: center; */
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 100%;
    z-index: 10;
    box-sizing: border-box;
`

const Text = styled.p`
    font-weight: bolder;
    line-height: 15vh;
    background-image: url(${bokhylla});
    font-size: 7em;
    @media screen and (max-width: 1200px) {
        font-size: 6em;
    }
    text-align: center;
    margin: 0;
    border: 4px solid;
    background-size: contain;
    /* width: 50vw; */
    /* height: 100%; */
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`
const Subtext = styled.p`
    font-size: 2em;
`
