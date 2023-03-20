import React, { useRef } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeckTemplate from '../../templates/DeckTemplate';
import Slider from 'react-slick';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import AnimateText from '../../components/AnimateText';

import { motion } from 'framer-motion';

const DeckContent = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const deckList = [
        {
            label: 'free to earn',
            desc: "Every player that completes a TDM or Battle Royale game entirely gets BattleFi tokens.",
            image: 'free'
        },
        {
            label: 'Bet to earn',
            desc: "Bet against other players in both Team Death Matches and Battle Royale game modes. Players can bet in multiple currencies, BattleFi tokens, BNB, USDC, and USDT.",
            image: 'bet'
        },
        {
            label: 'Bounty hunts and big rewards',
            desc: "Large rewards like iPhones from real world hunts can have players win big on BattleFi.",
            image: 'bounty'
        },
        {
            label: 'BattleFi NFTs',
            desc: "Higher base rewards per eligible game, upgradable player stats that access better weapons/armor and access to game revenue share via staking.",
            image: 'nft'
        },

    ]

    const slider = useRef(null)

    return (
        <section className="w-full min-h-screen h-auto bg-secondarybg relative py-20 overflow-hidden">
            <motion.img animate={{ rotate: 360, y: [0, 100, 0] }} transition={{ duration: 19, repeat: Infinity, ease: "linear" }} src="/deck/console.webp" alt="console" className="absolute 2xl:w-[18rem] w-[14rem] top-[20rem] left-20 lg:block hidden drop-shadow-lg" />
            <motion.img animate={{ rotate: 360, y: [0, 100, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} src="/deck/nintendo.webp" alt="switch" className="absolute 2xl:w-[14rem] w-[10rem] top-[20rem] right-40 lg:block hidden drop-shadow-lg" />

            <div className="w-full bg-secondarybg h-full text-center px-2">
                <AnimateText>
                    <p className='text-sm text-pongkan font-semibold mt-10'>BATTLE FI</p>
                    <h1 className='md:text-7xl text-4xl font-bold'>PLAY TO EARN</h1>
                    <p className='opacity-80'>BATTLEFI IS DESIGNED TO GET PLAYERS EARNING INMMEDIATELY VIA</p>
                </AnimateText>

                <div className="w-fit mx-auto mt-8 sm:max-w-[25rem] max-w-[17rem] h-auto relative">

                    <AiOutlineArrowLeft className='absolute top-0 bottom-0 my-auto -left-10 text-2xl cursor-pointer ' onClick={() => slider?.current?.slickPrev()} />
                    <AiOutlineArrowRight className='absolute top-0 bottom-0 my-auto -right-10 text-2xl cursor-pointer' onClick={() => slider?.current?.slickNext()} />

                    <Slider {...settings} ref={slider}>
                        {deckList.map((items, i) => {
                            return (
                                <DeckTemplate title={items.label} desc={items.desc} img={items.image} key={i} />
                            )
                        })}
                    </Slider>

                    <a href="" target="_blank" rel="noopener noreferrer" className="">
                        <button className="bg-myblack text-white rounded-md mx-auto px-7 py-4 h-fit w-fit mt-16 justify-center font-ginger flex items-center gap-x-3 transition-all ease-in-out duration-300">
                            <p className="min-w-[5.4rem]">Check the whitepaper</p>
                        </button>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default DeckContent