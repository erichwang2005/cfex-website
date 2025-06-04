import React from 'react'
import Manage from '../assets/homeImages/management.jpg'
import Electricity from '../assets/homeImages/electricity.jpeg'
import Wind from '../assets/homeImages/wind_turbines.jpg'
const HeroInfo = () =>
{
    return (
        <div className='w-full py-20 px-8 md:px-16 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-16 my-16'>
                <img className = 'rounded-xl w-full max-w-[700px] mx-auto my-4'src={Electricity} alt="Power Lines"/>
                <div className ='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 text-[#005777] dark:text-[#80BD00] font-bold'>Automating complex bilateral PPA settlement between buyers and sellers</h1>
                    <p>
                        Last year, enterprises and utilities worldwide bought over $200 billion of renewable 
                        energy from its producers. Most of these transactions were processed manually. 
                        Explosive demand for electricity, driven by AI-enabled applications and 
                        electrification over the next decade, will further increase the transaction 
                        volume and exacerbate the operation challenges. By automating these complex transactions, 
                        CFEX improves operation efficiency, reduces transaction costs, minimizes billing 
                        errors and disputes, and increases auditability.
                    </p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-16 my-16'>
                <div className ='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 text-[#005777] dark:text-[#0E8AFE] font-bold'>Streamlining Commercial Operations of renewable assets for buyers and sellers</h1>
                    <p>
                        Through PPA contracts, both buyers and sellers are joint stakeholders of renewable 
                        generation assets and thus have the need to forecast their generation, monitor their 
                        production and financial performance, and exchange data between buyers and sellers. 
                        CFEX provides a comprehensive suite of applications to streamline such commercial operations of 
                        generation assets for both buyers and sellers
                    </p>
                </div>
                <img className = 'rounded-xl w-full max-w-[700px] mx-auto my-4'src={Wind} alt="Wind Turbines"/>
            </div>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-16 my-16'>
                <img className = 'rounded-xl w-full max-w-[700px] mx-auto my-4'src={Manage} alt="Management"/>
                <div className ='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 text-[#005777] dark:text-[#80BD00] font-bold'>Managing EAC Inventories for and Transactions between Buyers and Sellers</h1>
                    <p>
                        As a part of the transactions between buyers and sellers, both need to manage EAC 
                        inventories, including those issued, transferred, expired, retired, etc. By centralizing 
                        the management of EAC inventories across their supply chains, including sellers, aggregators, 
                        and buyers, CFEX improves operational efficiency and minimizes errors.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroInfo