import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { useNavigate } from 'react-router-dom'

const NavMobile = ({ close }) => {

    const navigate = useNavigate()

    const navList = [
        {
            label: 'intro',
            slug: '/'
        },
        {
            label: 'ecosystem',
            slug: '/ecosystem'
        },
        {
            label: 'tokenomics',
            slug: '/tokenomics'
        },
        {
            label: 'roadmap',
            slug: '/roadmap'
        },
    ]

    const handleNavigate = (e) => {
        navigate(`${e}`)
        close()
    }

    return (
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} exit={{ opacity: 0, y: -20 }} className="w-full h-screen fixed top-0 left-0 z-40 bg-subtleblack text-white">
            <RiCloseFill className='text-4xl top-5 right-5 absolute' onClick={close} />

            <div className="w-fit mx-auto mt-20">
                <img src="/logo.webp" alt="Logo" className="w-20 mx-auto" />

                <ul className='mt-8 flex flex-col gap-y-14'>
                    {navList.map((items, i) => {
                        return (
                            <li
                                key={i}
                                className="font-poppins uppercase text-center"
                                onClick={() => {handleNavigate(items.slug)}}
                            >{items.label}</li>

                        )
                    })}
                </ul>

            </div>
        </motion.section>
    )
}

export default NavMobile