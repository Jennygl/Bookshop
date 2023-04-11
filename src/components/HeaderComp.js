// rfce
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LanguageContent from './LanguageContent'

function HeaderComp() {
    // Ändrar bakgrundsfärgen för navbaren när man scrollar.
    // Transparant från början
    const [backgroundColor, setBackgroundColor] = useState(
        'rgba(255, 255, 255, 0)'
    )
    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY
            const newBackgroundColor =
                scrollY < 40
                    ? 'rgba(255, 255, 255, 0)'
                    : 'rgba(255, 255, 255, 0.5)'
            setBackgroundColor(newBackgroundColor)
            const anotherBackgroundColor =
                scrollY > 100
                    ? 'rgba(255, 255, 255, 1)'
                    : 'rgba(255, 255, 255, 0.5)'
            setBackgroundColor(anotherBackgroundColor)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <Nav
                style={{ backgroundColor: backgroundColor }}
                className="navbar"
            >
                <Link to="/" className="navbar-brand">
                    <Title>
                        <LanguageContent contentID="roslagens" />
                    </Title>
                </Link>
                <NavbarNav id="navbar-nav">
                    <Link to="/" className="nav-link">
                        <Navp>
                            <LanguageContent contentID="home" />
                        </Navp>
                    </Link>
                    <Link to="/blog" className="nav-link">
                        <Navp>
                            <LanguageContent contentID="blog" />
                        </Navp>
                    </Link>

                    <Link to="/visit/:info" className="nav-link">
                        <Navp>
                            <LanguageContent contentID="visit" />
                        </Navp>
                    </Link>
                </NavbarNav>
            </Nav>
        </>
    )
}

export default HeaderComp

const Nav = styled.nav`
    flex-direction: column;
    position: fixed;
    top: 0px;
    z-index: 2000;
    width: 100vw;
    @media screen and (max-width: 600px) {
        margin-bottom: 10vh;
    }
`
const Title = styled.h2`
    font-family: 'Almendra Display', cursive;
    color: black;
`
const Navp = styled.p`
    color: black;
    font-weight: 500;
    font-size: 1em;
`
const NavbarNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`
