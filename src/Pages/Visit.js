import React from 'react'
import FormComp from '../components/FormComp'
import MapComp from '../components/MapComp'
import OpeningHours from '../components/OpeningHours'
import styled from 'styled-components'

function Visit() {
    return (
        <Container>
            <MapComp />
            <FormComp />
            <OpeningHours />
        </Container>
    )
}

export default Visit

const Container = styled.div`
    margin-top: 20vh;
    @media screen and (max-width: 600px) {
        margin-top: 35vh;
    }
`
