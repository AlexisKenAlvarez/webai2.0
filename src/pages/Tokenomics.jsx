import React, { useEffect } from 'react'
import Footer from '../views/Intro/Footer'
import TokenContent from '../views/Tokenomics/TokenContent'
import TokenHero from '../views/Tokenomics/TokenHero'

const Tokenomics = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <TokenHero/>
            <TokenContent/>
            <Footer/>
        </>
    )
}

export default Tokenomics