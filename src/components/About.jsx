import React from 'react'
import profilepic from '../assets/profile2.jpg'

import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();
    
  return (
    <div name="about" 
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white justify-center "    
    >
        
        <div 
             //className="border-2  max-w-screen-lg p-4 mx-auto md:mx-20  flex flex-col justify-center w-full h-full"
            className="max-w-screen-lg w-full h-full justify-center  mx-auto flex flex-col p-4"
        >
            <div className="pb-8 sm:pb-8 ">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">{t('about_header')}</p>
            </div>
            
            <div className="flex flex-col justify-start md:flex-row">
                <div className=" mx-auto md:mx-10 items-center mb-5 ">
                    <img src={profilepic} alt="profile" 
                        className=" shadow-sm shadow-green-400 rounded-3xl mx-5 h-36 sm:h-auto"    
                    />
                
                </div>

                <div className="py-0 max-w-lg  ml-16 sm:ml-14 " >
                    {/*<p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                         NAME :          Tanan Lertgungwarnkit<br></br>
                        GENDER :      Male<br></br>
                        AGE :              42<br></br>
                        NATIONALITY :   THAI<br></br>
                        RELIGION :          Buddhism<br></br>
                        LANGUAGE :      Thai, English, Japanese<br></br>
                        EDUCATION :     2000 – 2003:  Chulalongkorn University, <br></br>
                                        Major Computer Science <br></br>
Degree Bachelor of Science 
                        {t('about_content')}
                    </p>*/}
                    <div className="flex flex-row"> 
                        <p className="text-xs sm:text-lg font-extrabold  mt-0 whitespace-break-spaces text-green-500 w-28 sm:w-36">
                            {t('about_name_hd')}         
                        </p>
                        <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                            {t('about_name_dt')}  
                        </p>
                    </div>
                    
                    <div className="flex flex-row"> 
                        <p className="text-xs sm:text-lg font-extrabold  mt-0 whitespace-break-spaces text-green-500 w-28 sm:w-36">
                            {t('about_gender_hd')}     
                        </p>
                        <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                            {t('about_gender_dt')}  
                        </p>
                    </div>

                    <div className="flex flex-row"> 
                        <p className="text-xs sm:text-lg font-extrabold  mt-0 whitespace-break-spaces text-green-500 w-28 sm:w-36 ">
                            {t('about_age_hd')}                
                        </p>
                        <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                            {t('about_age_dt')}  
                        </p>
                    </div>

                    <div className="flex flex-row"> 
                        <p className="text-xs sm:text-lg font-extrabold  mt-0 whitespace-break-spaces text-green-500 w-28 sm:w-36">
                            {t('about_nation_hd')}     
                        </p>
                        <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                            {t('about_nation_dt')}  
                        </p>
                    </div>

                    <div className="flex flex-row"> 
                        <p className="text-xs sm:text-lg font-extrabold  mt-0 whitespace-break-spaces text-green-500 w-28 sm:w-36">
                            {t('about_religion_hd')}           
                        </p>
                        <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                            {t('about_religion_dt')}  
                        </p>
                    </div>

                    <div className="flex flex-row"> 
                        <p className="text-xs sm:text-lg font-extrabold  mt-0 whitespace-break-spaces text-green-500 w-28 sm:w-36">
                            {t('about_lang_hd')}        
                        </p>
                        <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                            {t('about_lang_dt')}  
                        </p>
                    </div>

                    <div className="flex flex-row"> 
                        <p className="text-xs sm:text-lg font-extrabold mt-0 whitespace-break-spaces text-green-500 w-28 sm:w-36 ">
                            {t('about_education_hd')}     
                        </p>
                        <div className="flex flex-col">
                            <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                                {t('about_education_dt1')}  
                            </p>
                            <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                                {t('about_education_dt2')}  
                            </p>
                            <p className="text-xs sm:text-lg  mt-0 whitespace-break-spaces text-green-500 w-auto">
                                {t('about_education_dt3')}  
                            </p>
                        </div>
                        
                    </div>
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