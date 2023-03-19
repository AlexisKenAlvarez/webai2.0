import React, { useEffect, useRef } from 'react'
import About from '../views/Intro/About'
import Footer from '../views/Intro/Footer'
import Hero from '../views/Intro/Hero'
import Partners from '../views/Intro/Partners'


const Intro = () => {

    return (

        <>
            <Hero />
            <About />
            <Partners />
            <Footer />
        </>

    )
}

export default Intro