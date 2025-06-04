import React from 'react'
import Renewable from '../assets/aboutImages/renewable.jpeg'
import Diagram from '../assets/aboutImages/AboutDiagram.png'
import EDF from '../assets/aboutImages/edf.png'
import Semi from '../assets/aboutImages/semi.png'
import Amazon from '../assets/aboutImages/amazon.png'
import Acore from '../assets/aboutImages/acore.png'
import DiagramDark from '../assets/aboutImages/AboutDiagramDark.png'
import { FaArrowRight } from 'react-icons/fa';
import Solar_Renewable from '../assets/aboutImages/renewable_solar.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <title>About Us</title>
            {/*Page Header*/}
            <div className="relative w-full h-[400px] overflow-hidden">
                <img src={Renewable} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Renewable Energy"/>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

                <div className="relative z-10 text-white w-full h-full flex flex-col justify-center items-center text-center">
                    <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl py-6">
                        About Us
                    </h1>
                </div>
            </div>

            <div className='w-full py-20 px-8 md:px-16 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white justify-center items-center text-center'>
                <h1 className = "text-[#005777] dark:text-[#ffffff] font-bold md:text-5xl sm:text-4xl text-3xl py-6 ">Our Mission</h1>
                <p className ="text-[#3a3a3a] text-lg dark:text-gray-400 w-[50%] mx-auto">
                    At CFEX, our mission is to accelerate the decarbonization of energy-related 
                    emissions by improving efficiency, reducing costs, and minimizing errors of 
                    complex bilateral PPA transactions between buyers and sellers of Carbon-Free Energy
                </p>
                <br></br>
                <h1 className = "text-[#005777] dark:text-[#ffffff] font-bold md:text-3xl sm:text-2xl text-xl py-6 ">Comprehensive Suite of Products</h1>
                <p className ="text-[#3a3a3a] text-lg dark:text-gray-400 w-[50%] mx-auto">
                    CFEX offers a comprehensive suite of products to streamline and automate bilateral 
                    complex PPA transactions between buyers and sellers of Carbon-Free Energy. 
                    These products can be packaged into four solutions for all participants in the supply chain.
                </p>
                <br></br>
                {/*Diagram*/}
                <img className = 'block dark:hidden rounded-xl max-w-[700px] mx-auto my-4'src={Diagram} alt="Diagram"/>
                <img className = 'hidden dark:block rounded-xl max-w-[700px] mx-auto my-4'src={DiagramDark} alt="Diagram Dark Mode"/>

                
                <h1 className = "text-[#005777] dark:text-[#ffffff] font-bold md:text-3xl sm:text-2xl text-xl py-6 ">Industry Validation</h1>
                <p className ="text-[#3a3a3a] text-lg dark:text-gray-400 w-[50%] mx-auto">
                    CFEX’s holistic approach to decarbonization of energy-related emissions has been embraced and supported by leading organizations and partners in the industry
                </p>
                <br></br>
                {/*Cards*/}
                <div className='w-full py-10 px-4 sm:px-8 md:px-16 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[EDF, Amazon, Acore, Semi].map((logo, index) => (
                    <div
                        key={index}
                        className='bg-gray-100 text-[#000000] w-full shadow-xl flex flex-col items-center p-6 rounded-lg hover:scale-105 duration-300 cursor-pointer dark:shadow-[0_4px_12px_0_#3bd1ff] dark:hover:shadow-[0_4px_12px_0_#c3ff42]'
                    >
                        <img
                        className='rounded-xl w-full max-w-[250px] object-contain aspect-[1/1] mx-auto'
                        src={logo}
                        alt={`Partner ${index + 1}`}
                        />
                    </div>
                    ))}
                </div>
                </div>
            </div>

            {/*Contact*/}
            <div className="relative w-full h-[400px] overflow-hidden">
                <div className = 'flex flex-col p-4 my-4 rounded-lg'>
                    <img src={Solar_Renewable} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Renewable Energy"/>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

                    <div className="relative z-10 text-white w-full h-full flex flex-col justify-center items-center text-center">
                        <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-6">
                            Streamline your Carbon Free operations
                        </h1>
                    </div>

                    <Link to="/contact" className="relative flex items-center z-10 bg-white opacity-100 text-gray-600 rounded-full w-[200px] h-[50px] font-medium my-6 hover:bg-[#005777] hover:text-white transition-all duration-300 overflow-hidden group mx-auto">
                        <span className="pl-5">Contact Us</span>
                        <span className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#005777] text-white rounded-full h-[45px] w-[45px] flex items-center justify-center group-hover:bg-white group-hover:text-[#005777] transition-all duration-300">
                            <FaArrowRight size={20} />
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default About