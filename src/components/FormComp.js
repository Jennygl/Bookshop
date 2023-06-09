import React, { useState } from 'react'
import styled from 'styled-components'
import bokhylla from '../assets/bookcase.jpeg'
import LanguageContent from './LanguageContent'

function FormComp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            setErrors({ name: '*' })
        }
        if (!email) {
            setErrors({ email: '*' })
        }
        if (!message) {
            setErrors({
                message: '*'
            })
            return
        }
        console.log('Submitted')
    }

    return (
        <>
            <Section>
                <Form onSubmit={handleSubmit}>
                    <Formtitle>
                        <LanguageContent contentID="contact" />
                    </Formtitle>
                    <InputDiv className="InputOne">
                        <Label>
                            <LanguageContent contentID="name" />:
                            {errors.name && <span>{errors.name}</span>}
                        </Label>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </InputDiv>
                    <InputDiv>
                        <Label>
                            <LanguageContent contentID="email" />:
                            {errors.email && <span>{errors.email}</span>}
                        </Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputDiv>
                    <InputDiv>
                        <Label>
                            <LanguageContent contentID="message" />:
                            {errors.message && <span>{errors.message}</span>}
                        </Label>
                        <textarea
                            name={message}
                            value={message}
                            rows="4"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </InputDiv>
                    <Button type="submit">
                        <LanguageContent contentID="send" />
                    </Button>
                </Form>

                <Img
                    src={bokhylla}
                    style={{ resizeMode: 'cover' }}
                    alt="Roslagens bokhandel"
                />
            </Section>
        </>
    )
}
export default FormComp

// Formulär och bild
const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50vw;
    margin: 5vh auto 5vh auto;
    border-radius: 5px;
    border: 2px solid palevioletred;
    @media screen and (max-width: 700px) {
        width: 90vw;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`

// Formuläret

const Formtitle = styled.h3`
    display: block;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: transparent;
    color: black;
    margin: 0;
    padding: 0.25em 1em;
    cursor: pointer;
    width: 100%;
`

// Respektive inputfält, inlkusive label
const InputDiv = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: column;
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
    align-self: center;
    background-color: #86b393;
    width: 70%;
    border: none;
    border-radius: 3px;
    margin-top: 10px;
`
// Böcker, bild bredvid formulär
const Img = styled.img`
    /* display:flex; */
    object-fit: cover;
    width: 20vw;
    height: 50vh;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`
