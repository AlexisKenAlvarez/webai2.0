import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, scroll } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi'
import { SlArrowUp } from 'react-icons/sl'
import { GiToken } from 'react-icons/gi'
import NavMobile from './NavMobile';

const Nav = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        console.log(location.pathname)
    }, [])

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

    const [scroll, setScrollPosition] = useState(0);
    const [navActive, setActive] = useState(false)
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

    const close = () => {
        setActive(false)
    }

    const open = () => {
        setActive(true)
    }

    const handleNavigate = (url) => {
        navigate(`${url}`)
    }


    return (
        <nav className='flex items-center p-3 px-6 lg:justify-between left-0 top-0 w-full z-[30] fixed pointer-events-none'>
            <AnimatePresence>
                {navActive ? <NavMobile close={close} key="NavMobile" /> : null}
            </AnimatePresence>
            <img src="/logo.webp" alt="Logo" className="w-20 cursor-pointer pointer-events-auto" />

            <div className="">
                <ul className="hidden uppercase font-ginger gap-x-9 text-sm lg:flex pointer-events-auto">
                    <AnimatePresence mode="sync">
                        {navList.map((items, i) => {
                            return (
                                scroll <= 100 ?
                                    <motion.div key={items.label} className="w-fit cursor-pointer group"
                                        initial={{ opacity: 0 }}
                                        animate={{ y: [-100, 0], opacity: 100 }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() => {handleNavigate(items.slug)}}
                                        style={location.pathname === items.slug ? { color: "#f86449" } : {}}
                                    >

                                        <li className='transition-width ease-in-out duration-300 group-hover:text-pongkan'>
                                            {items.label}
                                        </li>
                                        <div className="group-hover:w-[70%] mx-auto h-[3px] bg-[#f86449] mt-2 w-0 transition-width ease-in-out duration-300 opacity-0 group-hover:opacity-100" style={location.pathname === items.slug ? { opacity: "100", width: "70%" } : {}}></div>
                                    </motion.div>
                                    : null
                            )
                        })}
                    </AnimatePresence>

                </ul>
            </div>
            <a href="" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                <button className="bg-myblack text-white rounded-md h-11 w-[10rem] justify-center font-ginger lg:text-sm text-xs justify-self-start ml-4 lg:ml-0 flex items-center gap-x-3 transition-all ease-in-out duration-300" style={scroll >= 100 ? { width: "4rem" } : {}}>
                    <p style={scroll >= 100 ? { opacity: 0, display: "none" } : {}} className="min-w-[5.4rem]">BUY TOKEN</p>
                    <GiToken className='text-xl' />
                </button>
            </a>

            <GiHamburgerMenu className='lg:hidden text-3xl ml-auto' onClick={open} />

        </nav >
    )
}

export default Nav