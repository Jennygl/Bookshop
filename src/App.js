import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Open from './Pages/Open'
import Visit from './Pages/Visit'
import Contact from './Pages/Contact'
import ErrorPage from './components/ErrorPage'
import HeaderComp from './components/HeaderComp'
import FooterComp from './components/FooterComp'

function App() {
    return (
        <>
            <HeaderComp />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/openinghours" element={<Open />} />
                <Route path="/visit" element={<Visit />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Outlet></Outlet>
            <FooterComp></FooterComp>
        </>
    )
}

export default App
