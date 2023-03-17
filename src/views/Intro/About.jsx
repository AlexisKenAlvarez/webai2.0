import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const About = () => {


    const [imgRef, imgView] = useInView({ threshold: 0.6, rootMargin: "100px 0px 0px 0px" })

    return (
        <section className='w-full h-auto min-h-screen bg-mywhite py-20 md:px-24 px-7 font-poppins pb-36 overflow-hidden'>
            <div className="bg-[#ECECEC] w-full h-auto mt-[8rem] relative z-10 max-w-[1200px] mx-auto rounded-tr-2xl rounded-tl-2xl shadow-2xl">
                <div className="w-full h-12 bg-[#E1E1E1] rounded-tr-2xl rounded-tl-2xl flex">
                    <div className="flex items-center gap-x-3 ml-5">
                        <div className="w-5 h-5 bg-[#FF5E57] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#FEBE2E] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#27CB40] rounded-full"></div>
                    </div>
                </div>
                <div className="flex relative lg:flex-row flex-col text-center lg:text-left w-full md:px-20 px-9">
                    <div className="w-full h-full m-20 relative z-10 mx-auto lg:mx-0">
                        <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [.17, .60, .50, 1] }} className='text-pongkan font-medium'>ABOUT US</motion.h2>
                        <motion.h1 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [.17, .60, .50, 1] }} className='font-asap font-extrabold text-7xl text-myblue'>WEB AI</motion.h1>

                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [.17, .60, .50, 1] }} className="mt-6  mx-auto lg:mx-0 w-fit">
                            <p className='2xl:max-w-[37rem] max-w-[30rem] text-sm md:text-lg'>
                                Web AI is an innovative project that uses Artificial Intelligence 	&#40;AI&#41; technology to create customized websites from scratch. It utilizes deep learning algorithms and natural language processing 	&#40;NLP&#41; to analyze user requests and generate attractive, user-friendly websites according to their preferences. With its intuitive design, Web AI simplifies the website creation process and enables users to develop professional-looking websites for any purpose without manual coding. Whether you need a personal portfolio or a comprehensive ecommerce site, Web AI puts the power of web development into the hands of users with minimal effort.
                            </p>
                        </motion.div>
                    </div>
                    <motion.img initial={{ opacity: 0 }} animate={imgView ? { opacity: 1, scale: [1.2, 1] } : {}} transition={{ duration: 0.8 }} src="/about.webp" alt="About" className="lg:w-[35rem] w-[25rem] mx-auto lg:mx-0 lg:mt-9 lg:absolute -bottom-6 -right-20 z-0" ref={imgRef} />
                </div>



            </div>
        </section>
    )
}

export default About