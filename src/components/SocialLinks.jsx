import React, { Fragment, useState } from 'react'
import {FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import Modal from './Modal'

import resume from '../assets/resume.jpg'

const SocialLinks = () => {

    const [showModal, setShowModal] = useState(false)

    // function checkID(id) {
    //     if (id === 4){
    //         setShowModal(true)
    //     } else {
    //         setShowModal(false)
    //     }
    // }
    
    const links = [
        {
            id: 1,
            child: (
                <>
                    linkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:foo@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    CV <BsFillPersonLinesFill size={30} />
                </>
            ),
            // href: '/Resume_Tanan_2023.pdf',
            style: 'rounded-tr-md',
            download: true,
        }
    ]

  return (
    <Fragment>
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

            {links.map(({id, child, href, style, download}) => (
                <li 
                    key={id} 
                    className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-green-900" + " " + style}
                   
                    // onClick={() => checkID(id)}
                    onClick ={() => {
                        if (id === 4){
                            setShowModal(true)
                        } else {
                            setShowModal(false)
                        }
                    }}
                >
                    <a href={href}
                        className="flex justify-between items-center w-full text-white"
                        download={download}
                        target='_blank'
                        rel="noreferrer"
                    >

                        {child}

                   
                    </a>
                </li>
            ))}

            
        </ul>
    </div>
    <Modal isvisible={showModal} onClose={() => setShowModal(false)} >
        <p className="text-green-900 font-semibold border-b-2 border-gray-500 inline ml-40 mb-5">Please send email for full CV</p>
        <iframe width="100%" height="315" 
        src={resume}
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.4251295670265!2d100.63814727501806!3d14.344791386111803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d8a15bd58984f%3A0xf4c5ccdfca01f44d!2sKEIHIN%20THERMAL%20TECHNOLOGY%20(%20THAILAND%20)%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1689837650732!5m2!1sen!2sth"
        // src={slide}
        title="Sample Resume" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        
        </iframe>
      
    </Modal>
    </Fragment>
  )
}

export default SocialLinks