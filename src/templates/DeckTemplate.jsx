import React from 'react'
import { motion } from 'framer-motion'

const DeckTemplate = ({ title, desc, img }) => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: [0.5, 1] }} transition={{ duration: 0.5 }} className="sm:w-[25rem] w-[17rem] border-2 sm:h-[35rem] h-[38rem] bg-[#ECECEC]">
            <div className="w-full h-[65%] relative">
                <img src={`/deck/${img}.webp`} alt={title} className="w-full h-full absolute left-0 object-cover object-top" />
            </div>
            <div className="px-6">
                <h1 className='text-2xl mt-7 font-bold text-pongkan capitalize'>{title}</h1>
                <p className='opacity-70 text-sm mt-2'>{desc}</p>
            </div>
        </motion.div>
    )
}

export default DeckTemplate