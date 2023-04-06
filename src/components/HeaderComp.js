// rfce
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LanguageContent from './LanguageContent'

function HeaderComp() {
    // Ändrar bakgrundsfärgen för navbaren när man scrollar.
    const [backgroundColor, setBackgroundColor] = useState(
        'rgba(255, 255, 255, 0)'
    )
    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY
            const newBackgroundColor =
                scrollY > 10
                    ? 'rgba(255, 255, 255, 1)'
                    : 'rgba(255, 255, 255, 0.5)'
            setBackgroundColor(newBackgroundColor)
            const anotherBackgroundColor =
                scrollY > 600
                    ? 'rgba(255, 255, 255, 1)'
                    : 'rgba(255, 255, 255, 0.5)'
            setBackgroundColor(anotherBackgroundColor)
        }

        window.addEventListener('scroll', handleScroll)

        // return () => {
        //     window.removeEventListener('scroll', handleScroll)
        // }
    }, [])

    return (
        <>
            <Nav
                style={{ backgroundColor: backgroundColor }}
                className="navbar"
            >
                {/* <div className="nav-container"> */}
                <Link to="/" className="navbar-brand">
                    <Title><LanguageContent contentID="roslagens"/></Title>
                </Link>

                <Button className="navbar-toggler" onClick="">
                    <ion-icon name="menu-outline"></ion-icon>
                </Button>
                {/* <span class="fa-solid fa-books fa-rotate-270" style="color: #000000;"></span> */}
                <NavbarNav id="navbar-nav">
                    <Link to="/blog" className="nav-link">
                        <LanguageContent contentID="blog" />
                    </Link>
                    <Link to="/" className="nav-link">
                        <LanguageContent contentID="home" />
                    </Link>
                    <Link to="/visit" className="nav-link">
                        <LanguageContent contentID="map" />
                    </Link>
                    <Link to="/contact" className="nav-link">
                        <LanguageContent contentID="contact" />
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
    z-index: 2;
    width: 100vw;
    /* margin-bottom: 15vh; */
    /* align-items: center; */
    /* justify-items: center; */
    /* text-align:center; */
`
const Title = styled.h2`
    font-family: 'Almendra Display', cursive;
    color: black;
`
const Button = styled.button`
    display: none;
    @media screen and (max-width: 600px) {
        display: flex;
        font-size: 2.5em;
        text-align: center;
        justify-content: center;
    }
`

const NavbarNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
    /* margin-bottom: 15vh; */

    @media screen and (max-width: 600px) {
        display: none;
    }
`
// const Navlink = styled.link`
// font-size: 2em;
// padding: 5px 30px 5px 30px;
// margin: 0;
// color: black;
// `
// .nav-item {
//     padding-top: 10px;
//     color: black;
// }
