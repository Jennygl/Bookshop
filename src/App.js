import React, { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Open from './Pages/Open'
import Visit from './Pages/Visit'
import Contact from './Pages/Contact'
import ErrorPage from './components/ErrorPage.tsx'
import HeaderComp from './components/HeaderComp'
import FooterComp from './components/FooterComp'
import { LanguageContext } from './components/multilingualContext'

function App() {
    const [language, setLanguage] = useState('english')
    function toggleLanguage() {
        setLanguage((language) =>
            language === 'english' ? 'swedish' : 'english'
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
                    <Route path="/visit" element={<Visit />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<ErrorPage error={'problem'} />} />
                </Routes>
                <Outlet></Outlet>
                <FooterComp></FooterComp>
            </LanguageContext.Provider>
        </>
    )
}

export default App
