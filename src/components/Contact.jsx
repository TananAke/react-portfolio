import React from 'react'
import { MdOutlineMessage } from "react-icons/md"

import { useTranslation } from 'react-i18next';

const Contact = () => {

    const { t } = useTranslation();

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div 
            // className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto md:mx-20 h-full"
            className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto w-full h-full"
        >
            <div className=" pb-4">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">{t('contact_header')}</p>
                <p className="text-xs sm:text-base py-2 sm:py-4 ">{t('contact_subheader')}</p>
            </div>

            <div className="flex justify-center items-center"> 
                <form action="https://getform.io/f/a73b0a1d-dd73-4323-b58d-8c58c444abe6" 
                    method="POST"
                    className="flex flex-col w-full md:w-1/2"
                >
                    <input required type="text" name="name" placeholder={t('contact_name') } 
                    className="text-xs sm:text-base p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input required type="text" name="email" placeholder={t('contact_email')} 
                    className="text-xs sm:text-base my-4 p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <textarea name="message" rows="7" placeholder={t('contact_message')} 
                        className="text-xs sm:text-base p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    ></textarea>

                    <button className="group text-white bg-gradient-to-b from-green-500 to-green-900 px-6 py-0 sm:py-3 my-3 sm:my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                    {t('contact_send')}
                        <span 
                             className="group-hover:rotate-12 duration-300"
                        >
                            <MdOutlineMessage size={25} className="ml-1"/>
                        </span>
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact