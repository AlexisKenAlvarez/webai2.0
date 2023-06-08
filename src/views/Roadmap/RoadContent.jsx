import React, { useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import GlobeComp from '../../components/GlobeComp'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Particle from '../../components/Particle'
import { febList, marchList } from '../../utils/List'
import RoadmapTemplate from '../../templates/RoadmapTemplate'

const RoadContent = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const opacitySpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 15,
        restDelta: 0.001
    });

    const opacity = useTransform(opacitySpring, [0, 0.5], [0, 1])

    return (
        <div className='w-full min-h-screen h-auto lg:h-screen z-10 relative bg-subtleblack' ref={ref}>
            {/* <motion.div className="w-full fixed top-0 left-0 h-screen bg-subtleblack" style={{ opacity }}></motion.div> */}
            <Particle />
            <div className="w-full absolute lg:h-screen bg-subtleblack lg:bg-transparent b h-auto mt-20 lg:mt-0 pb-9 z-10 flex items-center justify-center pointer-events-none flex-col gap-x-11 lg:flex-row gap-y-32 px-4">
                <RoadmapTemplate title="FEB 2023" list={febList} />
                <RoadmapTemplate title="MAR 2023" list={marchList} />

            </div>
            <Canvas className='w-full h-screen bg-sublteblack lg:block hidden' id="canvas" shadows>
                <Suspense fallback={null}>
                    <GlobeComp />
                </Suspense>
            </Canvas>

        </div >

    )
}

export default RoadContent