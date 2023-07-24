import React, { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Widecard from './Widecard'
import pronescer from '../assets/prones_cer.jpg'
import prones from '../assets/prones.jpg'
import Modal from './Modal'

const Others = () => {

    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false)

  return (
    <Fragment>
    <div name="others"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto md:mx-20  flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">{t('others_header')}</p>
        </div>
        <div className="text-2xl justify-center items-center mx-auto">
         
          {/* <Widecard  title=""  />
          <Widecard  title=""  />
          <Widecard  title=""  />
          <Widecard  title=""  />
          <Widecard  title=""  /> */}
          <div className="shadow-md w-48 sm:w-72  shadow-yellow-300 rounded-lg pb-1">
            {/* <div className="border-2 h-60 w-48"> */}
            <img 
              src={pronescer} alt=""
              className="rounded-md  mx-auto w-64 h-36 duration-200 hover:scale-105 "
              onClick={() => setShowModal(true)}
            />
            <div className="flex items-center justify-center">
             
              <p className="text-green-500 text-xs pt-1 mx-1">
              PRO-NES Certification
              </p>
            </div>
          </div>   
          
          
        </div>

        <div className="flex flex-col w-full mx-auto"> 
          <p className="text-green-500 pt-3  text-xs sm:text-base font-semibold indent-10">
          {/* PRO-NES is a production control system. (Manufacturing Control System), 
          which uses Seiban and MRP control methods, 
          thus allowing manufacturers to produce products. 
          and delivered to customers on time Reduce the risk of purchasing 
          and prevent the occurrence of backlog products. */}
          {t('others_content1')}
          </p>
          <p className="text-green-500  text-xs sm:text-base font-semibold indent-10">
          {/* About 10 years of experience in implementing PRO-NES has given me a good knowledge 
          and understanding of the production control process. Starting from receiving Sales Order, 
           Production Planning, Issuing Purchase Orders/Production Orders, Goods Receiving, 
           Production Work Result, Finished Goods Shipment including inventory control management. */}
           {t('others_content2')}
          </p>
         
          </div>

      </div>
    </div>
    <Modal isvisible={showModal} onClose={() => setShowModal(false)}
      className=" mx-auto"
    >
      <iframe 
      width="100%" 
      height="390" 
      src={pronescer}
      title="Others" 
      frameborder="0" 
      //className=" w-300px sm:w-full "
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
    </Modal>
    </Fragment>
  )
}

export default Others