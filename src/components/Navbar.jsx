import React, {useState,useEffect} from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import cfexLogo from '../assets/cfex-dark.png';
import cfexLogoDark from '../assets/cfex-light.png';
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>
    {
        setNav(!nav)
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 768) {
                setNav(false);
            }
        };
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    const [mode, setMode] = useState(false)
    const handleMode = () =>
    {
        setMode(!mode)
        document.documentElement.classList.toggle('dark')
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-gray-600 bg-opacity-30">

            <div className="relative z-10 w-full h-full">
                {/* Navigation bar */}
                <div className="flex justify-between items-center px-8 py-6 w-full">
                    {/* Logo */}
                    <Link to = "/">
                        <img src={cfexLogo} alt="CFEX" className="h-10 cursor-pointer"/>
                    </Link>
                    
                    {/* Center: Nav links */}
                    <ul className="hidden md:flex gap-6 font-sans font-semibold text-white text-lg">
                        <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">
                            <Link to = "/solutions"> Solutions </Link>
                        </li>
                        <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">
                            <Link to = "/about"> About Us </Link>
                        </li>
                        <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">
                            <Link to = "/products"> Products </Link>
                        </li>
                    </ul>

                    {/* Right: Contact and Dark Mode Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to = "/contact" className="px-5 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                            Contact Us
                        </Link>

                        <button onClick={handleMode} className="w-10 h-10 rounded-full text-white font-bold flex items-center justify-center transition">
                            {mode ? (
                                <IoIosMoon size={10} className="bg-[#1a1a1a] hover:bg-[#4e65af] transition-all duration-200 w-10 h-10 rounded-full"/>
                            ) : (
                                <IoIosSunny size={20} className="bg-[#ffbe5c] hover:bg-[#ff9252] transition-all duration-200 w-10 h-10 rounded-full"/> 
                            )}
                        </button>
                    </div>

                    {/* Mobile menu icon */}
                    <div onClick={handleNav} className="md:hidden z-50">
                        {nav ? (
                            <RiCloseLargeFill size={24} className="text-white cursor-pointer"/>
                        ) : (
                            <RiMenu3Line size={24} className="text-white cursor-pointer" />
                        )}
                    </div>
                </div>

                <div
                    className={
                    nav
                        ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-white transition-all duration-500 z-40'
                        : 'fixed left-[-100%] top-0 transition-all duration-500 z-40'
                    }
                >
                    <div className="p-4">
                        <img src={cfexLogoDark} alt="CFEX" className="h-8"/>
                    </div>

                    <ul className="uppercase p-4 font-sans cursor-pointer space-y-2">
                        <Link to = "/">
                            <li className="p-4 border-b hover:bg-gray-200 rounded-md transition-colors duration-300 border-gray-600 ">
                                Home 
                            </li>
                        </Link>

                        <Link to = "/solutions">
                            <li className="p-4 border-b hover:bg-gray-200 rounded-md transition-colors duration-300 border-gray-600">
                                Solutions 
                            </li>
                        </Link>

                        <Link to = "/products">
                            <li className="p-4 border-b hover:bg-gray-200 rounded-md transition-colors duration-300 border-gray-600">
                                Products 
                            </li>
                        </Link>
                        
                        <Link to = "/about">
                            <li className="p-4 border-b hover:bg-gray-200 rounded-md transition-colors duration-300 border-gray-600">
                                About Us 
                            </li>
                        </Link>

                        <Link to = "/contact">
                            <li className="p-4 hover:bg-gray-200 rounded-md transition-colors duration-300">
                                Contact Us 
                            </li>
                        </Link>
                    </ul>   
                </div>
            </div>
        </div>  
    )
}

export default Navbar