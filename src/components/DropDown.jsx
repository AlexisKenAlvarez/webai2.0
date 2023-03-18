import React, { useState } from 'react'
import { motion } from 'framer-motion'

const DropDown = (props) => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(curr => !curr)
    }

    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, y: [20, 0]}} transition={{duraiton: 0.7, delay: 0.2}} className="select-none">
            <div className='w-full bg-[#D7D7D7] hover:bg-[#dfdfdf] transition-color ease-in-out duration-300 h-20 cursor-pointer justify-between items-center flex p-7 shadow-md group' onClick={handleToggle}>
                <h1 className={`font-asap font-semibold opacity-70 group-hover:text-pongkan transition-all ease-in-out duration-300 ${toggle ? "text-pongkan" : ""}`}>{props.title}</h1>
                <div className="sm:block hidden w-7 h-7 opacity-70 relative transition-all ease-in-out duration-300" style={toggle ? { transform: "rotate(270deg)" } : {}}>
                    <div className="w-[3px] h-[80%] bg-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-full transition-all ease-in-out duration-300 group-hover:bg-pongkan" style={toggle ? { backgroundColor: "#f86449" } : {}}></div>
                    <div className={`w-[80%] h-[3px] bg-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-full transition-all ease-in-out duration-300 group-hover:bg-pongkan ${toggle ? "scale-0" : "scale-1"}`} style={toggle ? { backgroundColor: "#f86449" } : {}}></div>
                </div>
            </div>

            <div className="w-full bg-[#E0E0E0] text-sm origin-top h-0 transition-height duration-300 ease-in-out flex items-center justify-center" style={toggle ? { height: "33rem" } : {}}>
                <div className="w-[95%] h-[95%] overflow-y-scroll px-3">
                    {props.children}
                </div>
            </div>
        </motion.div>
    )
}

export default DropDown