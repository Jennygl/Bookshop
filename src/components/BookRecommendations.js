import React, { useState, useEffect } from 'react'
import LanguageContent from './LanguageContent'
import { Link } from 'react-router-dom'

function BookRecommendations(props) {
    const [bookData, setBookData] = useState(null)

    useEffect(() => {
        fetch(
            'https://www.googleapis.com/books/v1/users/100514794045599611922/bookshelves/0/volumes'
        )
            .then((response) => response.json())
            .then((data) => {
                setBookData(data)
            })
    }, [])

    return (
        <>
            <h3 className="bookHeader">
                <LanguageContent contentID="rec" />
            </h3>
            <Link to="/books/{book.id}">
                <div className="cardContainer">
                    {bookData &&
                        bookData.items.map((book) => (
                            <div className="card" key={book.id}>
                                <div
                                    className="front"
                                    // key={book.id}
                                >
                                    <img
                                        src={
                                            book.volumeInfo.imageLinks.thumbnail
                                        }
                                        alt={book.volumeInfo.title}
                                        className="bookImage"
                                    ></img>
                                </div>

                                <div
                                    className="back"
                                    // key={book.id}
                                >
                                    <p id="bookTitle">
                                        {book.volumeInfo.title}
                                    </p>
                                    <p>
                                        by {book.volumeInfo.authors.join(', ')}
                                    </p>
                                    <p>{book.volumeInfo.categories}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </Link>
        </>
    )
}

export default BookRecommendations
