import React from 'react';
import windmillVideo from '../assets/homeImages/windmill-video.webm';
import { ReactTyped } from 'react-typed';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-[925px] overflow-hidden"> {/* pt-24 ensures content below fixed navbar */}
        <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
            <source src={windmillVideo} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

        <div className="relative z-10 text-white w-full h-full flex flex-col justify-center items-center text-center">
            <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl py-6">
                Carbon Free Energy Cloud
            </h1>

            <p className="font-bold p-2 text-gray-200">
                Platform to streamline ongoing, complex PPA transactions between buyers and sellers of Electrical Energy
            </p>

            <div className="flex justify-center items-center">
                <p className="text-gray-300 md:text-3xl sm:text-2xl text-xl font-bold">Using</p>

                <ReactTyped
                    className="text-gray-400 md:text-3xl sm:text-2xl text-xl font-bold pl-2"
                    strings={['Solar', 'Wind', 'Geothermal', 'Hydropower']}
                    typeSpeed={150}
                    backSpeed={160}
                loop
                />
            </div>
            <Link to = "/about" className="relative flex items-center bg-white text-gray-600 rounded-full w-[200px] h-[50px] font-medium my-6 hover:bg-[#005777] hover:text-white transition-all duration-300 overflow-hidden group">
                    <span className="pl-5">Learn More</span>
                    <span className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#005777] text-white rounded-full h-[45px] w-[45px] flex items-center justify-center group-hover:bg-white group-hover:text-[#005777] transition-all duration-300">
                    <FaArrowRight size={20} />
                    </span>
            </Link>
        </div>
    </div>
  );
};

export default Hero;