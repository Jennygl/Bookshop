import React, { useState } from 'react'
import styled from 'styled-components'
import bokhylla from '../assets/bookcase.jpeg'

function FormComp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            setErrors({ name: 'Fyll i ditt namn.' })
        }
        if (!email) {
            setErrors({ email: 'Fyll i din epost.' })
        }
        if (!message) {
            setErrors({
                message: 'Skriv ett meddelande till oss i bokhandeln.'
            })
            return
        }
        console.log('Submitted')
    }

    return (
        <Section>
            <Form onSubmit={handleSubmit}>
                <InputDiv className="InputOne">
                    <Label>Namn:</Label>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </InputDiv>
                <InputDiv>
                    <Label>E-post:</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </InputDiv>
                <InputDiv>
                    <Label>Meddelande:</Label>
                    <Input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && <span>{errors.message}</span>}
                </InputDiv>
                <Button type="submit">Skicka meddelande</Button>
            </Form>
            <div>
                <Img
                    src={bokhylla}
                    // className="Hero-image"
                    style={{ resizeMode: 'cover' }}
                    alt="Roslagens bokhandel"
                />
            </div>
        </Section>
    )
}
export default FormComp

// Formulär och bild
const Section = styled.section`
    /* margin-right: 20px; */
    display: flex;
    flex-direction: row;
    width: 50vw;
    margin: auto;
    border-radius: 5px;
    border: 2px solid palevioletred;
`

// Formuläret
const Form = styled.form`
display: flex;
flex-direction: column;
background: transparent;
text-align: start;
justify-content: center;
color: palevioletred;
margin: 0;
padding: 0.25em 1em;
cursor: pointer;
width: 30vw;
height: 35vh;
`

// Respektive inputfält, inlkusive label
const InputDiv = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
`


const Label = styled.label`
    display: flex;
`


const Input = styled.input`
    display: flex;
    width: 100%;
    border-radius: 3px;
`
// Submit-knapp
const Button = styled.button`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #86b393;
    width: 100%;
    border: none;
    border-radius: 3px;
    /* margin-bottom: 2vh; */
    margin-top: 10px;
`
// Böcker, bild bredvid formulär
const Img = styled.img`
    width: 20vw;
    height: 35vh;
    border-radius: 5px;
    /* @media (max-width: 768px) {
    width: 50vw;
    height: 50vh;
  } */
`
