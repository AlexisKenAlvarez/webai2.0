import React, { useEffect } from 'react'
import Footer from '../views/Intro/Footer'
import RoadContent from '../views/Roadmap/RoadContent'
import RoadHero from '../views/Roadmap/RoadHero'


const Roadmap = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <RoadHero />
            <RoadContent />
        </>
    )
}

export default Roadmap