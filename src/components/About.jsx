import React from 'react'
import profilepic from '../assets/profile2.jpg'

import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();
    
  return (
    <div name="about" 
        className="pt-10 sm:pt-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white justify-center "    
    >
        
        <div 
             //className="border-2  max-w-screen-lg p-4 mx-auto md:mx-20  flex flex-col justify-center w-full h-full"
            className="max-w-screen-lg w-full h-full justify-center  mx-auto flex flex-col p-4"
        >
            <div className="pb-3 sm:pb-8 ">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">{t('about_header')}</p>
            </div>
            
            <div className="flex flex-col justify-start md:flex-row">
                <div className=" mx-auto md:mx-10 items-center mb-1 ">
                    <img src={profilepic} alt="profile" 
                        className=" shadow-sm shadow-green-400 rounded-3xl mx-5 h-36 sm:h-auto"    
                    />
                
                </div>

                <div className="py-0 max-w-lg  ml-16 sm:ml-14 " >
                    <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                        {/* NAME :          Tanan Lertgungwarnkit<br></br>
                        GENDER :      Male<br></br>
                        AGE :              42<br></br>
                        NATIONALITY :   THAI<br></br>
                        RELIGION :          Buddhism<br></br>
                        LANGUAGE :      Thai, English, Japanese<br></br>
                        EDUCATION :     2000 – 2003:  Chulalongkorn University, <br></br>
                                        Major Computer Science <br></br>
Degree Bachelor of Science */}
                        {t('about_content')}
                    </p>
                    <br />
                    
                </div>
                {/* <div>
                    <p className="text-xl ">
                        detail2
                    </p>
                </div> */}
            </div>
            
            
        </div>
    </div>
  )
}

export default About