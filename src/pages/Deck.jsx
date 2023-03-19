import React from 'react'
import DeckContent from '../views/GameDeck/DeckContent'
import DeckHero from '../views/GameDeck/DeckHero'
import Footer from '../views/Intro/Footer'

const Deck = () => {
    return (
        <>
            <DeckHero />
            <DeckContent/>
            <Footer />
        </>
    )
}

export default Deck