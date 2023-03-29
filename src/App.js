import React from 'react'
import './App.css'
import BookRecommendations from './components/BookRecommendations'
import HeaderComp from './components/HeaderComp'
import HeroComp from './components/HeroComp'
import FooterComp from './components/FooterComp'
import MaskedText from './components/MaskedText'

function App() {
    return (
        <div className="App">
            <HeaderComp></HeaderComp>
            <HeroComp></HeroComp>
            <MaskedText></MaskedText>
            <BookRecommendations title="Rekommenderade nyheter"></BookRecommendations>
            <FooterComp></FooterComp>
        </div>
    )
}

export default App
