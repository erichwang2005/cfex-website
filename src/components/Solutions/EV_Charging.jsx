import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import solarPanels from '../../assets/solutionCards/solarPanels.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EV_Charging = () => {
    return (
        <div>
            <title>EV Charging Networks</title>
            {/*Page Header*/}
            <div className="relative w-full h-[400px] overflow-hidden">
                <img src={solarPanels} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="solar panels"/>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

                <div className="relative z-10 text-white w-full h-full flex flex-col justify-center items-center text-center">
                    <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl py-6">
                        Solutions
                    </h1>
                </div>
            </div>

            <div className='w-full py-20 px-8 md:px-16 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white justify-center items-center text-center'>
                <div>
                    <h1 className = "text-[#005777] dark:text-[#0E8AFE] font-bold md:text-4xl sm:text-3xl text-2xl py-6">For EV Fleet Depots & Charging Networks</h1>
                    <p className='w-[60%] mx-auto text-gray-600 dark:text-gray-400'>
                        Business Operation Platform Enabling EV Fleet Depots and Charging Networks
                        to Streamline Retail Billing, Optimize Utility Rate and Cost, and Manage
                        EAC Inventories to Support 100% Carbon Free Charging
                    </p>
                </div>

                <br></br>
                <div className='flex justify-center items-center text-gray-600 dark:text-white'>
                        <ul className="space-y-6 font-sans font-semibold text-lg text-left">
                        <li className="transition-colors duration-200 flex gap-x-4 items-start group">
                            <CiCircleCheck size={40} className='text-[#005777] dark:text-[#0E8AFE] dark:group-hover:text-[#80BD00]' />
                            <span className="mt-[5px]">
                                Allocate EAC inventories, on a per charging session basis, to support 100% carbon free charging.
                            </span>
                        </li>
                        <li className="transition-colors duration-200 flex gap-x-4 items-start group">
                            <CiCircleCheck size={40} className='text-[#005777] dark:text-[#0E8AFE] dark:group-hover:text-[#80BD00]'/>
                            <span className="mt-[7px]">
                                Automate billing, invoicing/statements, payments, and other back-office processes.
                            </span>
                        </li>
                        <li className="transition-colors duration-200 flex gap-x-4 items-start group">
                            <CiCircleCheck size={40} className='text-[#005777] dark:text-[#0E8AFE] dark:group-hover:text-[#80BD00]'/>
                            
                            <span className="mt-[7px]">
                                Centralize the management of thousands of retail pricing plans, utility supply tariffs, wholesale contracts.
                            </span>     
                        </li>
                        <li className="transition-colors duration-200 flex gap-x-4 items-start group">
                            <CiCircleCheck size={40} className='text-[#005777] dark:text-[#0E8AFE] dark:group-hover:text-[#80BD00]'/>
                            
                            <span className="mt-[7px]">
                                Optimize utility rates, minimize utility supply cost, and maximize profitability.
                            </span>     
                        </li>
                        <li className="transition-colors duration-200 flex gap-x-4 items-start group">
                            <CiCircleCheck size={40} className='text-[#005777] dark:text-[#0E8AFE] dark:group-hover:text-[#80BD00]'/>
                            
                            <span className="mt-[7px]">
                                Streamline the renewable energy procurements and manage EAC supplies.
                            </span>     
                        </li>
                    </ul>
                </div>

                <Link to = "/contact" className="relative flex items-center bg-white text-gray-600 rounded-full w-[200px] h-[50px] font-medium my-6 hover:bg-[#005777] hover:text-white transition-all duration-300 overflow-hidden mx-auto">
                    <span className="pl-5">
                            Learn More                             
                    </span>
                    <span className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#005777] text-white rounded-full h-[45px] w-[45px] flex items-center justify-center transition-all duration-300">
                        <FaArrowRight size={20} />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default EV_Charging