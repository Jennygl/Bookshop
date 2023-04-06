import React from 'react'
import FormComp from '../components/FormComp'
import MapComp from '../components/MapComp'
import OpeningHours from '../components/OpeningHours'
import styled from 'styled-components'

function Contact() {
    return (
        <Container>
            <Map>
                <MapComp />
            </Map>

            <FormComp />
            <OpeningHours />
        </Container>
    )
}

export default Contact

const Container = styled.div`
    margin-top: 15vh;
`

const Map = styled.div`
    /* width: 20vw;
    height: 35vh; */
    border-radius: 5px;
`
