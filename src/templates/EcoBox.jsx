import React from 'react'

const EcoBox = (props) => {
    return (
        <div className="bg-[#272727] w-full h-auto relative z-10 max-w-[1200px] mx-auto rounded-tr-2xl rounded-tl-2xl shadow-md py-20 text-white">
            <div className="w-full h-12 bg-[#1E1E1E] rounded-tr-2xl rounded-tl-2xl flex absolute top-0 left-0">
                <div className="flex items-center gap-x-3 ml-5">
                    <div className="w-5 h-5 bg-mycyan rounded-full"></div>
                    <div className="w-5 h-5 bg-mypurple rounded-full"></div>
                    <div className="w-5 h-5 bg-mypink rounded-full"></div>
                </div>
            </div>
            <div className="flex relative lg:flex-row flex-col w-full md:px-20 px-9">
                {props.children}
            </div>
        </div>
    )
}

export default EcoBox