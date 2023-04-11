import React, { useState, useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Open from './Pages/Open'
import Visit from './Pages/Visit'
import Books from './Pages/Books'
import ErrorPage from './components/ErrorPage.tsx'
import HeaderComp from './components/HeaderComp'
import BlogPost from './components/BlogPost'
import FooterComp from './components/FooterComp'
import { LanguageContext } from './components/LanguageContext'

function App() {
    const [language, setLanguage] = useState('english')
    function toggleLanguage() {
        setLanguage((language) =>
            language === 'english' ? 'svenska' : 'english'
        )
    }
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
            <LanguageContext.Provider value={{ language, toggleLanguage }}>
                <HeaderComp />
                <Routes>
                    <Route path="/" element={<Home bookData={bookData} />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route path="blog/:id" element={<BlogPost />} />
                    <Route path="/openinghours" element={<Open />} />
                    <Route path="/visit/:info" element={<Visit />} />
                    {/* <Route exact path="/books">{bookData.map(book=>(key={book.id}))}</Route> */}
                    <Route
                        path="/books/:bookId"
                        element={<Books bookData={bookData} />}
                    />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    <Route path="*" element={<ErrorPage error={'problem'} />} />
                </Routes>
                <Outlet></Outlet>
                <FooterComp
                    date="230406"
                    style={{ position: 'absolute', bottom: '0' }}
                ></FooterComp>
            </LanguageContext.Provider>
        </>
    )
}

export default App
