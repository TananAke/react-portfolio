import React from 'react'
import langc from '../assets/c.png'
import langflutter from '../assets/flutter.png'
import langjava from '../assets/java.png'
import langreact from '../assets/react.png'
import langreactnative from '../assets/react-native.png'
import langvb from '../assets/vb.png'
import langphp from '../assets/c.png'

import dboracle from '../assets/oracle.png'
import dbsql from '../assets/sql.png'
import dbmysql from '../assets/mysql.png'

import toolsplsql from '../assets/plsql.png'
import toolsvscode from '../assets/vscode.png'
import toolstailwind from '../assets/tailwind.png'
import toolsuipath from '../assets/uipath.png'
import toolsandroid from '../assets/androidstd.png'


import { BiSignal1, BiSignal2, BiSignal3, BiSignal4, BiSignal5 } from "react-icons/bi"
import { MdSignalCellular0Bar, MdSignalCellular1Bar, MdSignalCellular2Bar, MdSignalCellular3Bar,MdSignalCellular4Bar } from "react-icons/md"



import { useTranslation } from 'react-i18next';


const Skills = () => {

  const { t } = useTranslation();

  const languages = [
    {
      id:1,
      src: langreact,
      title: 'React',
      style:'shadow-blue-500',
      level: '3'
    },
    {
      id:2,
      src: langflutter,
      title: 'Flutter',
      style:'shadow-blue-500',
      level: '3'
    },
    {
      id:3,
      src: langc,
      title: 'C',
      style:'shadow-blue-500',
      level: '2'
    },
    {
      id:4,
      src: langreactnative,
      title: 'React-Native',
      style:'shadow-blue-500',
      level: '3'
    },
    {
      id:4,
      src: langvb,
      title: 'VB .net',
      style:'shadow-blue-500',
      level: '2'
    },
  ]

  const database = [
    {
      id:1,
      src: dboracle,
      title: 'Oracle',
      style:'shadow-red-500',
      level: '4'
    },
    {
      id:2,
      src: dbsql,
      title: 'SQL',
      style:'shadow-red-500',
      level: '3'
    },
    {
      id:3,
      src: dbmysql,
      title: 'MySQL',
      style:'shadow-red-500',
      level: '3'
    },
  ]

  const tools = [
    {
      id:1,
      src: toolsplsql,
      title: 'PL/SQL Developer',
      style:'shadow-yellow-500',
      level: '4'
    },
    {
      id:2,
      src: toolsvscode,
      title: 'Visual Studio Code',
      style:'shadow-yellow-500',
      level: '3'
    },
    {
      id:3,
      src: toolstailwind,
      title: 'Tailwind',
      style:'shadow-yellow-500',
      level: '3'
    },
    {
      id:3,
      src: toolsuipath,
      title: 'UiPath',
      style:'shadow-yellow-500',
      level: '3'
    },
    {
      id:4,
      src: toolsandroid,
      title: 'Android Studio',
      style:'shadow-yellow-500',
      level: '3'
    },
  ]

  // const checkLevel = (level) => {
  //   if (level === 1) {
  //     <BiSignal1 size={25} className="ml-1"/>
  //   }else {
  //     <BiSignal2 size={25} className="ml-1"/>
  //   }
  // }

  function checkLevel(props) {
    // if (props.level === '1'){
    //   return <BiSignal1 size={25} className="ml-1 text-red-500"/>
    // } else {
    //   return <BiSignal2 size={25} className="ml-1"/>
    // }

    switch(props.level) {
      case '1':
        return <MdSignalCellular0Bar size={25} className="ml-3 text-red-500"/>
      case '2':
        return <MdSignalCellular1Bar size={25} className="ml-3 text-yellow-500"/>
      case '3':
        // return <BiSignal3 size={25} className="ml-3 text-green-500"/>
        return <MdSignalCellular2Bar size={25} className=" text-green-500"/>
        

      case '4':
        return <MdSignalCellular3Bar size={25} className="ml-3 text-blue-500"/>
      case '5':
        return <MdSignalCellular4Bar size={25} className="ml-3 text-purple-500"/>
      default:
        return null
    }
  }

  return (
    <div name="skills" className="pt-8 sm:pt-0 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
                       
      <div className="max-w-screen-lg mx-auto md:mx-20 p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="flex flex-row">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline mt-10">
            {/* Skills */}
            {t('skills_header')}    
               
          </p>
          {/* <MdSignalCellular0Bar size={25} className="ml-3 text-red-500"/> 
          <MdSignalCellular1Bar size={25} className="ml-3 text-yellow-500"/> */}
          <MdSignalCellular4Bar size={40} className="ml-3 text-purple-500 mt-10"/>
          
          {/* <p className="py-6">Programming Language : </p> */}
        </div>
        <p className="pt-6 text-center text-blue-500 font-bold ">{t('skills_language')}</p>
        <div className=" w-auto grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-1 px-12 sm:px-0">

          {
            languages.map(({id, src, title, style, level}) => (
              <div 
                key={id} 
                //className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg"}
                className={`shadow-md hover:scale-105 duration-500 py-0 rounded-lg ${style}`}
              >
                <img src={src} alt="" 
                  className="w-5 sm:w-9 mx-auto bg-transparent"
                />

                <div className="flex flex-row justify-center items-end">
                <p className="mt-0  mx-0 md:mx-3 text-xs">{title} </p>
                {/* <BiSignal1 size={25} className="ml-1"/>  */}
                {
                  checkLevel({level})
                }
                </div>
                
                
              </div>
            ))
          }

              {/* <div 
                
                className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                <img src={langreact} alt="" 
                  className="w-20 mx-auto"
                />
                <p className="mt-4">React</p>
              </div> */}

          
        </div>

        <p className="pt-4 text-center text-red-500 font-bold">{t('skills_database')}</p>
        <div className="w-auto grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-1 px-12 sm:px-0">

          {
            database.map(({id, src, title, style, level}) => (
              <div 
                key={id} 
                //className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg"}
                className={`shadow-md hover:scale-105 duration-500 py-0 rounded-lg ${style}`}
              >
                <img src={src} alt="" 
                  className="w-6 sm:w-9 mx-auto bg-transparent"
                />
                <div className="flex flex-row justify-center items-end">
                <p className="mt-0  mx-0 md:mx-3 text-xs">{title} </p>
                {/* <BiSignal1 size={25} className="ml-1"/>  */}
                {
                  checkLevel({level})
                }
                </div>
              </div>
            ))
          }     
        </div>

        <p className="pt-4 text-center text-yellow-500 font-bold">{t('skills_tools')}</p>
        <div className="w-auto grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-1 px-12 sm:px-0">

          {
            tools.map(({id, src, title, style, level}) => (
              <div 
                key={id} 
                //className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg"}
                className={`shadow-md hover:scale-105 duration-500 py-0 rounded-lg ${style}`}
              >
                <img src={src} alt="" 
                  className="w-5 sm:w-9 mx-auto bg-transparent"
                />
                <div className="flex flex-row justify-center items-end">
                <p className="mt-0  mx-0 md:mx-3 text-xs">{title} </p>
                {/* <BiSignal1 size={25} className="ml-1"/>  */}
                {
                  checkLevel({level})
                }
                </div>
              </div>
            ))
          }     
        </div>

      </div>
      </div>
  )
}

export default Skills