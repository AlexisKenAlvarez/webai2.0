import React from 'react'
import Chart from 'react-apexcharts'
import AnimateDesc from '../../components/AnimateDesc'
import AnimateImage from '../../components/AnimateImage'
import AnimateText from '../../components/AnimateText'
import EcoBox from '../../templates/EcoBox'

const TokenContent = () => {
    const tokenList = [
        { label: '30% Fairlaunch raise', color: '#5a9bd5' },
        { label: '15% Liquidity pool, locked 1 year', color: '#ee7e31' },
        { label: '10% Marketing. Partial unlock on 26th February', color: '#a5a5a5' },
        { label: '5% Advisors. Partial unlock on 1st March', color: '#ffc000' },
        { label: '10% Cex listings Locked for 10 days', color: '#70ae46' },
        {
            label: '15% burn 10% locked until 26th. 5% locked for a month', color: '#255f91'
        }
    ]
    return (
        <section className="w-full h-auto py-20 bg-secondarybg px-7">
            <EcoBox>
                <div className="mt-5 w-full">
                    <div className="flex justify-between items-center w-full lg:flex-row flex-col text-center lg:text-left gap-y-10">
                        <div className="">
                            <AnimateText>
                                <h3 className='text-pongkan font-semibold text-xl'>WEBAI Tokenomics</h3>
                            </AnimateText>

                            <AnimateDesc>
                                <div className="mt-6">
                                    <ul className='gap-y-5 flex flex-col'>
                                        {tokenList.map((items, i) => {
                                            return (
                                                <li key={i} className="flex items-center gap-x-4 lg:flex-row flex-col-reverse">
                                                    <div className="min-w-7 w-20 lg:w-4 lg:h-4 h-2" style={{ backgroundColor: `${items.color}`, boxShadow: `0px 0px 20px 1px ${items.color}` }}></div>
                                                    <p className="opacity-80 max-w-[30rem]">{items.label}</p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </AnimateDesc>

                        </div>


                        <AnimateImage src="chart" className="w-[25rem]" />
                    </div>
                    <div className="mt-10 lg:text-left text-center">
                        <AnimateText>
                            <h3 className='text-pongkan font-semibold text-xl'>WEBAI Token Taxes</h3>
                        </AnimateText>

                        <AnimateDesc>
                            <div className="flex flex-col gap-y-3 opacity-80 mt-5">
                                <p className="">1% Further development of WebAI ecosystem</p>
                                <p className="">2% Strategic marketing of WebAI token and ecosystem</p>
                            </div>
                            <p className="mt-5">NOTE: Since March 13th, the taxes have been set to 0/0 until further notice!</p>
                        </AnimateDesc>

                    </div>
                </div>

            </EcoBox>


        </section>
    )
}

export default TokenContent