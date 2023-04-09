// import React, { useState, useEffect } from 'react'
// import LanguageContent from './LanguageContent'
// import { Link } from 'react-router-dom'

// function BookRecommendations(props) {
//     // const [bookData, setBookData] = useState(null)

//     // useEffect(() => {
//     //     fetch(
//     //         'https://www.googleapis.com/books/v1/users/100514794045599611922/bookshelves/0/volumes'
//     //     )
//     //         .then((response) => response.json())
//     //         .then((data) => {
//     //             setBookData(data)
//     //         })
//     // }, [])
//     // const { id } = useParams()
//     return (
//         <div className="cont">
//             <h3 className="bookHeader">
//                 <LanguageContent contentID="rec" />
//             </h3>
//             <div className="cardContainer">
//                 {props.bookData &&
//                     props.bookData.items.map((book) => (
//                         <div className="card" key={book.id}>
//                             <div className="front">
//                                 <img
//                                     src={book.volumeInfo.imageLinks.thumbnail}
//                                     alt={book.volumeInfo.title}
//                                     className="bookImage"
//                                     id={book.id}
//                                 ></img>
//                             </div>

//                             <div className="back">
//                                 {/* <Link to={`/books/${book.id}`}> */}
//                                 <p id="bookTitle">{book.volumeInfo.title}</p>
//                                 {/* </Link> */}

//                                 <p>by {book.volumeInfo.authors.join(', ')}</p>
//                                 <p>{book.volumeInfo.categories}</p>
//                             </div>
//                         </div>
//                     ))}
//             </div>
//             {/* </Link> */}
//         </div>
//     )
// }

// export default BookRecommendations
