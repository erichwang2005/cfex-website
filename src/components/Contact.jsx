import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import contactCity from '../assets/contactImages/contactCity.jpg';
import contactHeader from '../assets/contactImages/contactHeader.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        alert('Form Submitted!');
    };

    return (
        <div>
            <title>Contact Us</title>
            {/* Page Header */}
            <div className="relative w-full h-[400px] overflow-hidden">
                <img src={contactHeader} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="City" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
                <div className="relative z-10 text-white w-full h-full flex flex-col justify-center items-center text-center">
                    <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl py-6">
                        Contact Us
                    </h1>
                </div>
            </div>

            <div className="w-full py-20 px-8 md:px-16 bg-gray-200 transition-colors duration-300 dark:bg-[#272727] dark:text-white justify-center items-center text-center">
                {/* Get in Touch */}
                <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-8 my-16 px-4">
                    <div className="flex flex-col justify-center items-center w-full md:w-[80%] mx-auto text-center">
                        <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 text-[#005777] dark:text-[#0E8AFE] font-bold">
                            Get in Touch
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300">
                            Whether it's navigating the complexities of wholesale energy contracts, Scope 2 emissions,
                            or just sharing ideas, we look forward to being your reliable ally on the path to a greener future.
                        </p>
                    </div>
                    <img className="rounded-xl w-full max-w-[700px] mx-auto my-4" src={contactCity} alt="City" />
                </div>

                {/* Contact Form */}
                <div className="max-w-[900px] mx-auto my-8 px-4">
                    <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
                         <input type="hidden" name="access_key" value="13111ded-e641-4741-8770-0330da25175a"/>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name*"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005777] dark:bg-[#2c2c2e] dark:text-white"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name*"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005777] dark:bg-[#2c2c2e] dark:text-white"
                                required
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005777] dark:bg-[#2c2c2e] dark:text-white"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message*"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005777] dark:bg-[#2c2c2e] dark:text-white"
                            required
                        ></textarea>

                        <button className="relative flex items-center bg-white text-gray-600 rounded-full w-[150px] h-[50px] font-medium my-6 hover:bg-[#005777] hover:text-white transition-all duration-300 overflow-hidden group mx-auto">
                            <span className="pl-5">Submit</span>
                            <span className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#005777] text-white rounded-full h-[45px] w-[45px] flex items-center justify-center group-hover:bg-white group-hover:text-[#005777] transition-all duration-300">
                                <FaArrowRight size={20} />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;