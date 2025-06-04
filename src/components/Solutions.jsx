import React from 'react'
import solarPanels from '../assets/solutionCards/solarPanels.jpg'
import Card1 from '../assets/solutionCards/card1.png'
import Card2 from '../assets/solutionCards/card2.png'
import Card3 from '../assets//solutionCards/card3.png'
import Card4 from '../assets//solutionCards/card4.png'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Solutions = () => {
    return (
        <div >
            <title>Solutions</title>
            {/*Page Header*/}
            <div div className="relative w-full h-[400px] overflow-hidden">
                <img src={solarPanels} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Solar Panels"/>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

                <div className="relative z-10 text-white w-full h-full flex flex-col justify-center items-center text-center">
                    <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl py-6">
                        Solutions
                    </h1>
                </div>
            </div>
            
            <div className='w-full py-20 px-8 md:px-16 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white justify-center items-center text-center'>
                <h1 className = "text-[#005777] dark:text-[#f5faff] font-bold md:text-3xl sm:text-2xl text-xl py-6 ">Solutions for Buyers, Sellers and Aggregators of Carbon-Free Energy</h1>
                <p className ="text-[#3a3a3a] text-lg dark:text-gray-300">
                    CFEX offers a suite of solutions for CFE buyers, sellers and aggregators to enable them to streamline CFE transactions with one another.
                </p>
                {/*Cards*/}
                <div className="w-full py-10 px-4 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                        {
                            link: '/solutions/ev-charging',
                            img: Card1,
                            alt: 'Card1',
                            title: 'For EV Fleet Depots & Charging Networks',
                            desc: `Business Operation Platform Enabling EV Fleet Depots and Charging Networks to Streamline Retail Billing, Optimize Utility Rate and Cost, and Manage EAC Inventories to Support 100% Carbon Free Charging`,
                        },
                        {
                            link: '/solutions/cfe-owners',
                            img: Card2,
                            alt: 'Card2',
                            title: 'For Renewable and CFE IPPs',
                            desc: `Commercial Asset Operation Platform enabling renewable and CFE Independent Power Producers (IPPs) to managegeneration meter data, EAC inventories, and PPA contracts; automate daily settlement; and streamline monthly billing and invoicing`,
                        },
                        {
                            link: '/solutions/enterprise-buyers',
                            img: Card3,
                            alt: 'Card3',
                            title: 'For Enterprises',
                            desc: `Renewable Asset Operation and Decarbonization Platform enabling enterprises to streamline the commercial operations of renewable generation assets and use the EAC inventories from these assets to decarbonize their operations`,
                        },
                        {
                            link: '/solutions/utilities',
                            img: Card4,
                            alt: 'Card4',
                            title: 'For Utilities',
                            desc: `Green Energy Operation Platform Enabling Utilities to Streamline Renewable Procurements, Manage EAC Inventories, Operationalize Green Tariffs, and Offer Carbon Services for their Customers`,
                        },
                        ].map((item, index) => (
                        <Link
                            to={item.link}
                            key={index}
                            className="bg-gray-100 dark:bg-[#212125] w-full shadow-xl flex flex-col items-center p-6 rounded-lg hover:scale-105 duration-300 cursor-pointer dark:shadow-[0_4px_12px_0_#3bd1ff] dark:hover:shadow-[0_4px_12px_0_#c3ff42] group"
                        >
                            <img className="w-20 mx-auto -mt-12" src={item.img} alt={item.alt} />
                            <h2 className="text-[#005777] dark:text-[#0E8AFE] dark:group-hover:text-[#80BD00] text-2xl font-bold text-center py-6">
                                {item.title}
                            </h2>
                            <p className="w-full max-w-xs mx-auto text-left flex-grow whitespace-pre-line">
                                {item.desc}
                            </p>
                            <div className="mt-6 flex justify-center">
                                <button className="relative flex items-center bg-gray-200 text-gray-600 rounded-full w-[200px] h-[50px] font-medium hover:bg-[#005777] hover:text-white transition-all duration-300 overflow-hidden">
                                    <span className="pl-5">Learn More</span>
                                    <span className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#005777] text-white rounded-full h-[45px] w-[45px] flex items-center justify-center transition-all duration-300">
                                    <FaArrowRight size={20} />
                                    </span>
                                </button>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Solutions