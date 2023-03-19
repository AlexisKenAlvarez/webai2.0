import React, { useRef, useState, useEffect } from 'react'
import Particle from '../../components/Particle'
import { SlArrowDown } from 'react-icons/sl'
import { AnimatePresence, motion } from 'framer-motion'

const RoadHero = () => {

    const [mousePosition, setMouse] = useState({
        x: 0,
        y: 0
    })

    const [toggle, setToggle] = useState(false)

    const windowRef = useRef((event) => {
        const x = -(event.clientX / window.innerWidth) * 30 - 1;
        const y = -(event.clientY / window.innerHeight) * 30 + 1;
        setMouse({ x, y })
    })

    useEffect(() => {

        document.addEventListener("mousemove", windowRef.current);

        return () => {
            document.removeEventListener("mousemove", windowRef.current);

        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setToggle(curr => !curr)
        }, 1000);
    }, [toggle])

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const word = "ROADMAP"
    const arr = word.split("")

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='w-full h-screen relative'>
            <AnimatePresence>
                {scrollPosition <= 170 ?
                    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="relative z-10 h-full w-full transition-opacity duration-500 ease-in-out" key="mainDiv">

                        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="w-fit h-fit fixed left-0 right-0 bottom-0 m-auto pointer-events-none z-10">
                            <img src="/roadmap.webp" alt="Hero" className="relative m-auto lg:w-[75vh] w-[60vh] z-10"
                                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
                        </motion.div>


                        <section className="max-w-[1500px] w-full mx-auto h-full flex  justify-center relative z-0">
                            {arr.map((items, i) => {
                                return (
                                    <motion.h1
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 100 }}
                                        transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                                        key={i}
                                        className="font-roboto text-myblack text-6xl sm:text-8xl  lg:text-[10rem] 2xl:text-[13rem] font-bold text-center lg:mt-[9rem] mt-[9rem]  select-none">{items}</motion.h1>
                                )
                            })}
                        </section>

                        <AnimatePresence>
                            {toggle ?
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    exit={{ y: 10, opacity: 0 }}
                                    key="firstArrow"
                                    className="w-fit h-fit fixed z-10 bottom-5 left-0 right-0 mx-auto">
                                    <SlArrowDown className='text-myblack opacity-70  text-3xl' />
                                </motion.div>
                                :
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    exit={{ y: 10, opacity: 0 }}
                                    key="secondArrow"
                                    className="w-fit h-fit fixed z-10 bottom-5 left-0 right-0 mx-auto">
                                    <SlArrowDown className='text-myblack opacity-70  text-3xl' />
                                </motion.div>
                            }

                        </AnimatePresence>


                    </motion.div >
                    : null}
            </AnimatePresence>


        </motion.section >
    )
}

export default RoadHero