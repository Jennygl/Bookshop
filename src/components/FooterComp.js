import React from 'react'
import styled from 'styled-components'
import { LanguageButton } from './LanguageButton'
import LanguageContent from './LanguageContent'

function FooterComp(props) {
    return (
        <>
            <div className="cardContainer">
                {props.footerData &&
                    props.footerData.items.map((book) => (
                        <div className="card" key={book.id}>
                            <div className="front">
                                <img
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                    alt={book.volumeInfo.title}
                                    className="bookImage"
                                    id={book.id}
                                ></img>
                            </div>

                            <div className="back">
                                <p id="bookTitle">{book.volumeInfo.title}</p>
                                <p>by {book.volumeInfo.authors.join(', ')}</p>
                                <p>{book.volumeInfo.categories}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <Footer>
                <LanguageContent contentID="language" />: <LanguageButton /> -
                <LanguageContent contentID="changeLang" />
                <div className="contact">
                    <p>
                        <LanguageContent contentID="roslagens" />{' '}
                        <LanguageContent contentID="square" />
                    </p>
                    <p>Lilla torget 1</p>
                    <p>761 30 Norrtälje</p>
                </div>
                <div className="social">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <Copy>
                    &copy; Jenny Grinde Lensing. Senast uppdaterad {props.date}
                </Copy>
            </Footer>
        </>
    )
}

export default FooterComp

const Footer = styled.footer`
    position: relative;
    bottom: 0px;
    /* left: 0px;  */
    width: 100vw;
    text-align: center;
    padding: 10px;
    @media screen and (max-width: 430px) {
        font-size: 0.8em;

`
const Copy = styled.p`
    color: grey;
    @media screen and (max-width: 430px) {
        font-size: 0.8em;
    }
`
/* const Add = styled.p`
    @media screen and (max-width: 430px) {
        font-size: 0.8em;
    }
` */
