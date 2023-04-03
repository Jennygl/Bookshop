import React from 'react'
import FormComp from '../components/FormComp'
import styled from 'styled-components'

function Contact() {
    return (
        <>
            <Adress>
                <h3>Hitta hit</h3>
                <p>Roslagens bokhandel vid Lilla torget i Norrtälje</p>
                <p>Lilla torget 1</p>
                <p>761 30 Norrtälje</p>
            </Adress>

            <FormComp></FormComp>
        </>
    )
}

export default Contact

const Adress = styled.div`
    position: relative;
    margin: 25vh 0 0 5vw;
`
