import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const AnimateText = (props) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.8 })

    return (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: [.17, .60, .50, 1] }} className="" ref={ref}>
            {props.children}
        </motion.div>
    )
}

export default AnimateText