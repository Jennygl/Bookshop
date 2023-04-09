import React from 'react'
import LanguageContent from './LanguageContent'

function BookRecommendations(props) {
    return (
        <div className="cont">
            <h3 className="bookHeader">
                <LanguageContent contentID="rec" />
            </h3>
            <div className="cardContainer">
                {props.bookData &&
                    props.bookData.items.map((book) => (
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
        </div>
    )
}

export default BookRecommendations
