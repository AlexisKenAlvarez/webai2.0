import React from 'react'
import { motion } from 'framer-motion'
import AnimateText from '../../components/AnimateText'
import { Tweet } from 'react-twitter-widgets'

const Partners = () => {
    const partnerList = [
        {
            link: 'https://www.dexview.com',
            image: 'dexview'
        },
        {
            link: 'https://www.pinksale.finance',
            image: 'pinksale'
        },
        {
            link: 'https://poocoin.app/tokens/0x7c5e8a22a4e8f9da2797a9e30e9d64abf5493c43',
            image: 'poocoin'
        },
        {
            link: 'https://www.dextools.io/app/en/bnb/pair-explorer/0x1d643d0d670d64b5ec922d8db3d50f3af706ce93',
            image: 'dextools'
        },
        {
            link: 'https://avedex.cc/token/0x7c5e8a22a4e8f9da2797a9e30e9d64abf5493c43-bsc?from=Default',
            image: 'avedex'
        },
        {
            link: 'https://www.bitmart.com/en-US',
            image: 'bitmart'
        },
    ]

    return (
        <section className="w-full min-h-screen h-auto bg-subtleblack z-10 relative overflow-hidden py-10 px-8 text-white">
            <motion.img initial={{ opacity: 0, x: -100 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [.17, .60, .50, 1], delay: 0.6 }} src="/partners/left.webp" alt="Hands" className="absolute left-0 2xl:bottom-[19rem] xl:bottom-[32rem] xl:block hidden w-[23rem] z-[-1]" />
            <motion.img initial={{ opacity: 0, x: 100 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [.17, .60, .50, 1], delay: 0.6 }} src="/partners/right.webp" alt="Hands" className="absolute right-0 2xl:bottom-[19rem] xl:bottom-[32rem] xl:block hidden w-[23rem] z-[-1]" />

            <AnimateText>
                <h1 className='md:text-7xl sm:text-5xl text-3xl max-w-[45rem] text-center mx-auto mt-[12rem] relative z-10 text-transparent bg-clip-text bg-gradient-to-br w-fit from-mycyan to-mypink font-bold'>WE WORK WITH THE BEST PARTNERS</h1>
                <p className="max-w-[55rem] text-center mx-auto mt-3 relative z-10">As the crypto market continues to evolve and mature, we recognize the importance of collaboration and building strong relationships  with key players in the in dustry.</p>
            </AnimateText>
            <motion.img animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} src="/partners/globe.webp" alt="Globe" className="absolute top-32 -left-10 right-0 mx-auto select-none brightness-200" />

            <div className="flex flex-wrap gap-5 max-w-[905px] mx-auto mt-16 justify-center items-center">
                {partnerList.map((items, i) => {
                    return (
                        <a href={items.link} target="_blank" className="" rel="noopener noreferrer" key={i}>
                            <motion.div initial={{ scale: 0, y: 10 }} whileInView={{ scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="w-[18rem] h-[5rem] bg-white/10 cursor-pointer rounded-md gap-x-3 relative flex items-center justify-center py-4 group hover:shadow-md">

                                <div className="w-full h-full absolute top-0 left-0 glassPartner rounded-md border-[1px] border-white/20"></div>

                                <img src={`/partners/${items.image}.webp`} alt={items.image} className={`group-hover:scale-[1.1] transition-all ease-in-out duration-300 z-10 w-[2.5rem] ${items.image === "dexview" ? "invert" : items.image === "bitmart" ? "invert" : ''}`} />
                                <h3 className='capitalize font-bold text-2xl relative z-10 '>{items.image}</h3>
                            </motion.div>
                        </a>

                    )
                })}
            </div>

            <div className="w-fit mx-auto flex mt-32 gap-x-10 items-center lg:flex-row flex-col text-center lg:text-left gap-y-10 pb-10">

                <div className="">
                    <div className="overflow-hidden">
                        <motion.h1 initial={{ opacity: 0 }} whileInView={{ y: [30, 0], opacity: 1 }} transition={{ duration: 0.7, ease: [.17, .60, .50, 1] }} className='md:text-6xl text-3xl max-w-[30rem] text-transparent bg-clip-text bg-gradient-to-br w-fit from-mycyan to-mypink font-bold'>LOREM PARTNERSHIP</motion.h1>
                    </div>

                    <div className="overflow-hidden">
                        <motion.p initial={{ opacity: 0 }} whileInView={{ y: [30, 0], opacity: 1 }} transition={{ duration: 0.7, ease: [.17, .60, .50, 1] }} className='max-w-[30rem] mt-3 opacity-80'>Lorem is a global cryptocurrency exchange that allows users in 180+ countries to buy and sell over 1,000 digital currencies and tokens.</motion.p>
                    </div>

                </div>
                <div className="h-fit rounded-xl  md:w-[25rem] w-[20rem]">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: [40, 0] }} transition={{ duration: 0.7, ease: [.17, .60, .50, 1], delay: 0.5 }} className="relative z-10">
                        <Tweet tweetId='1146438745253699584' className="w-full z-10 relative" />
                    </motion.div>
                    {/* <div className="w-full h-32 holo bg-gradient-to-t from-white" ></div> */}
                </div>
            </div>

        </section>
    )
}

export default Partners