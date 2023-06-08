import React from 'react'
import { SiTwitter, SiFacebook, SiLinktree, SiYoutube } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Footer = () => {

    const [ftRef, ftView] = useInView({ threshold: 1 })

    return (
        <footer className='w-full h-full py-10 pb-20 md:pb-10 bg-[#111111] z-10 relative font-poppins overflow-hidden'>
            <motion.img initial={{ y: 50, opacity: 0 }} animate={ftView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: [.17, .60, .50, 1] }} src="/logo.webp" alt="Logo" className="w-[17rem] mx-auto" />

            <div className="bg-[#181818] text-white w-full md:h-14 absolute bottom-0 left-0 flex items-center md:px-20 justify-between md:flex-row flex-col py-6 h-auto gap-y-3">
                <p className="text-xs font-ginger font-light text-center md:text-left" ref={ftRef}>
                    COPYRIGHT CHAINMIX. 2023. ALL RIGHT RESERVED
                </p>

                <div className="flex items-center gap-x-6 text-xl">
                    <SiTwitter className='cursor-pointer' />
                    <SiFacebook className='cursor-pointer' />
                    <SiLinktree className='cursor-pointer' />
                    <SiYoutube className='cursor-pointer' />
                    <FaTelegramPlane className='cursor-pointer' />
                    <MdEmail className='cursor-pointer' />
                </div>
            </div>
        </footer>
    )
}

export default Footer