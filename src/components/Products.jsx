import React from 'react';
import HydroPower from '../assets/productImages/hydropower.jpg';
import { FaArrowRight } from 'react-icons/fa';
import managementMeter from '../assets/productImages/meter_manage.png';
import contractIcon from '../assets/productImages/contract_managment.png';
import inventoryIcon from '../assets/productImages/inventory_manage.png';
import billingIcon from '../assets/productImages/billing_icon.png';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <title>Products</title>

      {/* Page Header */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={HydroPower}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="Hydro Power"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
        <div className="relative z-10 text-white w-full h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl py-6">
            Products
          </h1>
        </div>
      </div>

      {/* Intro Text */}
      <div className="w-full py-20 px-4 sm:px-8 md:px-16 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white flex flex-col items-center text-center">
        <h1 className="text-[#005777] dark:text-white font-bold md:text-5xl sm:text-4xl text-3xl py-6">
          Comprehensive Suite of Products
        </h1>
        <p className="text-[#3a3a3a] text-lg dark:text-gray-400 max-w-3xl">
          CFEX offers a comprehensive suite of products to streamline and
          automate intra-business clean energy operation processes and
          inter-partner transactions across the CFE supply chain. These
          products can be packaged into four solutions for all participants in
          the supply chain.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full py-10 px-4 sm:px-8 md:px-16 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Card Template */}
          {[
            {
              link: '/products/mdms',
              img: managementMeter,
              alt: 'Management Meter Icon',
              title: 'Meter Data Management System (MDMS)',
              desc: 'Centralizes management of both consumption and generation meter data',
            },
            {
              link: '/products/cms',
              img: contractIcon,
              alt: 'Contract Icon',
              title: 'Contract Management System (CMS)',
              desc: 'Centralizes management of PPA and other contracts',
            },
            {
              link: '/products/meter-to-eac',
              img: inventoryIcon,
              alt: 'Inventory Icon',
              title: 'EAC Inventory Management System',
              desc: 'Centralizes management and allocation of EAC inventories',
            },
            {
              link: '/products/meter-to-cash',
              img: billingIcon,
              alt: 'Billing Icon',
              title: 'Billing and Settlement System',
              desc: 'Automates daily settlement and monthly billing and invoice reconciliation',
            },
          ].map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="bg-gray-100 dark:bg-[#212125] w-full shadow-xl flex flex-col items-center p-6 rounded-lg hover:scale-105 duration-300 cursor-pointer dark:shadow-[0_4px_12px_0_#3bd1ff] dark:hover:shadow-[0_4px_12px_0_#c3ff42] group"
            >
              <div className="w-28 h-28 rounded-full border-[#80BD00] border-2 bg-white flex items-center justify-center -mt-12">
                <img className="w-20" src={item.img} alt={item.alt} />
              </div>
              <h2 className="text-[#005777] dark:text-[#0E8AFE] text-2xl font-bold text-center py-6 group-hover:dark:text-[#80BD00] transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-center w-full max-w-xs mx-auto flex-grow">
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
  );
};

export default Products;