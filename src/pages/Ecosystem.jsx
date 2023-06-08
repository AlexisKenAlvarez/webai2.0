import React, { useEffect } from 'react'
import EcoHero from '../views/Ecosystem/EcoHero'
import Footer from '../views/Intro/Footer'
import EcoContent from '../views/Ecosystem/EcoContent'

const Ecosystem = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <EcoHero />
            <EcoContent />
            <Footer />
        </>
    )
}

export default Ecosystem