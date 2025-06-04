import React,{useState,useEffect} from 'react'
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import cfexLogo from '../assets/cfex-dark.png'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(()=> {
        setYear(new Date().getFullYear())
    }, []);
    return (
        <div className="w-full mx-auto py-16 px-4 text-white bg-[#005777]">
            <div className="flex flex-col lg:flex-row gap-x-56 items-start pl-20 gap-y-8">
                <div>
                    <img src={cfexLogo} alt="CFEX" className="h-10 cursor-pointer" />
                    <p className = 'py-4'>The cloud-based clean energy operation platform for both buyers and sellers of renewable energy.</p>
                    <div className='flex gap-x-2'>
                        <a href="mailto:info@cfexcloud.com" className="flex items-center gap-x-2 hover:cursor-pointer">
                            <IoIosMail size={20}/>
                            <span>info@cfexcloud.com</span>
                        </a>
                    </div>

                    <div className='flex gap-x-2'>
                        <a href="https://x.com/cfexcloud" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:cursor-pointer">
                            <FaXTwitter size={20} />
                            <p>@cfexcloud</p>
                        </a>
                    </div>

                    <div className='flex gap-x-2'>
                        <a href="https://www.linkedin.com/company/cfexcloud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:cursor-pointer">
                            <FaLinkedinIn size={20} />
                            <p className='mt-[5px]'>CFEX, Inc.</p>
                        </a>
                    </div>
                </div>
            
                
                <div className = 'grid-cols-2'>
                    <h1 className = 'font-bold md:text-2xl sm:text-xl text-lg'>Locations</h1>
                    <div className = 'flex flex-col'>
                        <h2 className = 'font-bold my-2'>Headquarters:</h2>
                        <p>CFEX Inc.
                            95 Third Street, 2nd Floor
                            San Francisco, CA 94103, USA
                        ‍</p>

                        <h2 className = 'font-bold my-2'>Singapore Office:</h2>
                        <p>
                            CFEX Singapore PTE LTD
                            51 Goldhill Plaza #7-10/11
                            Singapore 308900, Singapore
                        </p>

                    </div>
                </div>
            </div>
            <hr className="w-full mx-auto h-px my-8 bg-gray-200 border-0"/>
            <p className = "pl-20"> © CFEX. All Rights Reserved {year}. </p>
        </div>
    )
}

export default Footer