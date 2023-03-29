<h3 className="sectionTitle">
                Rekommenderade nyheter
            </h3>
            <div className="cardContainer">
                {bookData &&
                    bookData.items.map((book) => (
                        <div className="card" key={book.id}>
                            <div
                                className="front"
                                key={book.id}
                            >
                                <h2>{book.volumeInfo.title}</h2>
                                <p>by {book.volumeInfo.authors.join(', ')}</p>
                                <img
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                    alt={book.volumeInfo.title}
                                    className="bookImage"
                                ></img>
                            </div>

                            <div
                                className="back"
                                key={book.id}
                            >
                                <h2>{book.volumeInfo.title}</h2>
                            </div>
                        </div>
                    ))}
            </div>
