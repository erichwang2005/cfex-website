import React from 'react'
import ContractManagement from '../../assets/productImages/contract-managment.jpeg'
import HydroPower from '../../assets/productImages/hydropower.jpg'

const CMS = () => {
    return (
        <div>
            <title>Contract Management System</title>
            {/*Page Header*/}
            <div className="relative w-full h-[400px] overflow-hidden">
                <img src={HydroPower} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Hydro Power"/>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

                <div className="relative z-10 text-white w-full h-full flex flex-col justify-center items-center text-center">
                    <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl py-6">
                        Products
                    </h1>
                </div>
            </div>

            <div className='w-full py-20 px-8 md:px-16 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white justify-center items-center text-center'>         
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 my-16 px-4">
                    <div className="flex flex-col justify-center items-center w-full md:w-[80%] mx-auto text-center">
                        <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 text-[#005777] dark:text-[#0E8AFE] font-bold">
                            Contract Management System (CMS)
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300">
                            The CFEX CMS product centralizes the management of your organization’s contracts with counterparties and tracks 
                            ongoing contract obligations. The CMS accurately models PPAs, utility tariffs, ISDAs, and PTC transfer agreements 
                            of any complexity.
                        </p>
                    </div>
                    <img className="rounded-xl w-full max-w-[1200px] mx-auto my-4" src={ContractManagement} alt="Contract Management" />
                </div>
            </div>
        </div>
    )
}

export default CMS