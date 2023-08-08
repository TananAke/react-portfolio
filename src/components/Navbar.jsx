import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdLanguage, MdOutlineMessage } from "react-icons/md"
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';

import i18n from '../i18n'
import { translate } from 'react-i18next'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const { t } = useTranslation();


    const links = [
        {
            id: 1,
            // link: 'home',
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'project'
        },
        {
            id: 4,
            link: 'workplace'
        },
        {
            id: 5,
            link: 'skills'
        },
        {
            id: 6,
            link: 'capabilities'
        },
        {
            id: 7,
            link: 'contact'
        },
        {
            id: 8,
            link: 'others'
        }
    ]

  return (

    // <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
     <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div className="justify-start">
        <h1 className="text-5xl font-bold font-signature ml-2 text-green-400">Tanan</h1>
        </div>
        
        <ul className="hidden md:flex">
        {/* <ul className="flex  items-end justify-between"> */}

            {links.map(({id, link}) => (
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                    {/* {link} */}
                    <Link to={link} smooth duration={500}>{t(link)}</Link>
                </li>
            ))}

            
        </ul>

        <div className="flex flex-row items-center">
        
                    <button className="group text-xs text-white w-fit px-2 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-900 cursor-pointer hover:scale-110 duration-300" 
                        onClick={() => {
                            i18n.changeLanguage('en')
                          }}
                    >
                        EN
                        {/* <span className="group-hover:rotate-90 duration-300">
                            <MdLanguage size={25} className="ml-1"/>
                        </span> */}
                    </button>

                    <button className="group ml-3 text-xs text-white w-fit px-2 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-900 cursor-pointer hover:scale-110 duration-300"
                        onClick={() => {
                            i18n.changeLanguage('th')
                          }}
                    >
                        TH
                        {/* <span className="group-hover:rotate-90 duration-300">
                            <MdLanguage size={25} className="ml-1"/>
                        </span> */}
                    </button>

                   

        {/* <button
        //className="button"
        // onClick={() => {
        //   i18n.changeLanguage('th')
        // }}
      >
        TH
      </button>
      <button
        //className="button"
        // onClick={() => {
        //   i18n.changeLanguage('en')
        // }}
      >
        EN
      </button> */}
        </div>
        

        <div onClick={() => setNav(!nav)} 
            className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden "
        >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            {/* <FaBars size={30}/> */}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center
                 absolute z-40 top-0 right-0 w-44 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-100
                  "
            >
        
                    {links.map(({id, link}) => (
                        <li 
                            key={id} 
                            className="px-4 cursor-pointer capitalize py-4 text-base hover:scale-105 duration-200"
                        >
                            {/* {link} */}
                            {/* <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link> */}
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{t(link)}</Link>
                        </li>
                    ))}
        
                </ul>
            )}

        
        
    </div>
  )
}

export default Navbar