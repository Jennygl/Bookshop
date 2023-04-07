import React, { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Open from './Pages/Open'
import Visit from './Pages/Visit'
import Books from './Pages/Books'
import ErrorPage from './components/ErrorPage.tsx'
import HeaderComp from './components/HeaderComp'
import FooterComp from './components/FooterComp'
import { LanguageContext } from './components/LanguageContext'

function App() {
    const [language, setLanguage] = useState('english')
    function toggleLanguage() {
        setLanguage((language) =>
            language === 'english' ? 'svenska' : 'english'
        )
    }
    
    return (
        <>
            <LanguageContext.Provider value={{ language, toggleLanguage }}>
                <HeaderComp />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/openinghours" element={<Open />} />
                    <Route path="/visit/:info" element={<Visit />} />
                    <Route path="/books/:id" element={<Books />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    <Route path="*" element={<ErrorPage error={'problem'} />} />
                </Routes>
                <Outlet></Outlet>
                <FooterComp date="230406"></FooterComp>
            </LanguageContext.Provider>
        </>
    )
}

export default App
