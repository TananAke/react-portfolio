import React from 'react'
import { useTranslation } from 'react-i18next';
import Widecard from './Widecard'

const Capabilities = () => {

  const { t } = useTranslation();

  return (
    <div name="capabilities"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto md:mx-20  flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">{t('capa_header')}</p>
        </div>
        <div className=" text-xs sm:text-base">
         
          <Widecard  title={t('capa_content1')}  />
          <Widecard  title={t('capa_content2')} />
          <Widecard  title={t('capa_content3')}  />
          <Widecard  title={t('capa_content4')}  />
          <Widecard  title={t('capa_content5')} />
          <Widecard  title={t('capa_content6')}  />
          <Widecard  title={t('capa_content7')}  />
          <Widecard  title={t('capa_content8')}  />
          <Widecard  title={t('capa_content9')}  />
          
          
        </div>
      </div>
    </div>
  )
}

export default Capabilities