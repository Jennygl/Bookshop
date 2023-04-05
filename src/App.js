import React from 'react'
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
import { UserInfo } from './components/UserInfo'

function App() {
    return (
        <>
            <UserInfo.Provider value={'Hej'}>
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
            </UserInfo.Provider>
        </>
    )
}

export default App
