import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const RoadmapTemplate = ({ title, list }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.7 })
    return (
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1, y: [10, 0], scale: [0.5, 1] } : {}} transition={{ duration: 1, ease: [.17, .60, .50, 1] }} className="max-w-[30rem] h-auto min-h-[30rem] glass relative p-6 py-7 pointer-events-none" ref={ref}>
            <h1 className='absolute left-0 right-0 mx-auto top-0 translate-y-[-117%] md:text-7xl text-6xl opacity-90 text-transparent bg-clip-text bg-gradient-to-br w-fit from-mycyan to-mypink font-bold'>{title}</h1>

            <ul className="flex flex-col gap-y-3">
                {list.map((items, i) => {
                    return (
                        <motion.li initial={{ opacity: 0 }} animate={inView ? { opacity: 1, y: [10, 0] } : {}} transition={{ duration: 1, ease: [.17, .60, .50, 1], delay: 0.5 + i * 0.07 }} className='flex items-center text-white gap-x-2' key={i}>
                            <div className={`w-2 h-[8px] shadow-md rounded-full`} style={items.done ? { backgroundColor: `#00FF00`, boxShadow: `0px 0px 20px 1px #00FF00` } : { backgroundColor: `#FF0000`, boxShadow: `0px 0px 20px 1px #FF0000` }}></div>
                            <p className="text-sm">{items.label}</p>
                        </motion.li>
                    )
                })}
            </ul>
        </motion.div>
    )
}

export default RoadmapTemplate