import React from 'react'
import ProfilePic from '../assets/profile.jpg'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import ReactTypingEffect from 'react-typing-effect'

import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation();

  return (
    <div 
        name="home" 
        className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center "> //h-full
                {/* <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Hello everyone
                </h2> */}
                {/* <ReactTypingEffect text={['Hello everyone,', 'My name is Tanan.']} speed={80} eraseDelay={200} className=" text-green-500 text-4xl font-bold" /> */}
                <ReactTypingEffect 
                    text={[t('hello'), t('myname')]} 
                    speed={80} 
                    eraseDelay={200} 
                    cursorClassName="text-green-900"
                    className=" text-green-500 text-4xl font-bold" 
                />
                <p className="text-gray-500 py-4 max-w-md text-xs sm:text-base indent-10">
                {/* I have 10 years of experience software developing  and 10 years of experience software implementation for production control.
                Presently, I'm interested and learning about web application, mobile application developing by using technologies like React, React-Native and Tailwind. */}
                {t('home_content')}
                </p>
                {/* <div className="border-2"> */}
                    {/* <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"> */}
                    {/* <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-900 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </button>
                </div> */}
            </div>

            <div className="">
                <img 
                src={ProfilePic} 
                alt="my profile" 
                className=" shadow-lg shadow-green-400 rounded-2xl mx-5 w-2/3 md:w-full "
                />
            </div>

        </div>
    </div>
  )
}

export default Home