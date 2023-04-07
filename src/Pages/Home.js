import React from 'react'
// import HeaderComp from '../components/HeaderComp'
import HeroComp from '../components/HeroComp'
// import MaskedText from './MaskedText'
import BookRecommendations from '../components/BookRecommendations'
// import FooterComp from '../components/FooterComp'
function Home() {
    return (
        <div>
             <HeroComp></HeroComp>
            <BookRecommendations title="Rekommenderade nyheter"></BookRecommendations>

        </div>
    )
}

export default Home
