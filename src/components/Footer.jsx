import React from 'react';
import { RiTwitterXFill } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="bg-red-800 text-gray-100 py-6 px-8 mx-6 rounded-xl">
        <div className="container mx-4 flex flex-wrap justify-between items-center">
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4 sm:mb-0">
                <h2 className="text-4xl text-red-100">Snooze <span className='font-bold'>Eatery</span></h2>
                <p className="mt-2 text-xl">A taste of Nigeria</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4 sm:mb-0">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <ul className="flex space-x-4 pt-4">
                    <li className="text-white hover:text-gray-900 cursor-pointer">
                        <BsFacebook size={25} />
                    </li>
                    <li className="text-white hover:text-gray-900 cursor-pointer">
                        <RiTwitterXFill size={25} />
                    </li>
                    <li className="text-white hover:text-gray-900 cursor-pointer">
                        <BsInstagram size={25} />
                    </li>
                    <li className="text-white hover:text-gray-900 cursor-pointer">
                        <BsTelegram size={25} />
                    </li>
                </ul>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0">
                <h3 className="text-xl font-bold pt-4">Contact Us</h3>
                <p className='pt-4'>Email: adeyeyeoluwafunmike1@gmail.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>
        </div>
        <div className="mt-6 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Oluwafunmike Adeyeye</p>
        </div>

    </div>

  )
}

export default Footer;