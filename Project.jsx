import React, { Fragment, useEffect, useRef, useState } from 'react'
import furuno from '../assets/furuno.jpg'
import productionctrl from '../assets/production_ctrl.jpg'
import dev from '../assets/dev.jpg'
import slide from '../assets/slide.mp4'

import HoverVideoPlayer from 'react-hover-video-player'
import { useTranslation } from 'react-i18next';
import Modal from './Modal'

const Project = () => {

  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false)

  const ref = useRef(null);
  const [focus, setFocus] = useState(false);

  const loop = () => {
    ref.current.play();
  };

  const onEndedLoop = () => {
    if (focus) loop(); // when ended check if its focused then loop
  };

  useEffect(() => {
    if (focus) loop(); // when focused then loop
  }, [focus]);

  return (
    <Fragment>
    <div name="project" className=" pt-16 sm:pt-0 pb-32 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div 
        // className="max-w-screen-lg p-4 mx-auto md:mx-20   flex flex-col justify-center w-full h-full"
        className="max-w-screen-lg p-4 mx-auto    flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 sm:pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            {t('project_header')}
          </p>
          {/* <p className="py-6"> My past Project</p> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-1 sm:px-12 ">

        {/* <div className="shadow-md w-72 h-48 shadow-gray-600 rounded-lg  ">
          <HoverVideoPlayer 
            videoSrc={slide} 
            className="rounded-md mx-2   w-64 h-36 duration-200 hover:scale-105"
            loadingOverlay={<div className=" text-green-700">Loading...</div>}
            // hoverOverlay={<div className=" text-green-700">hover...</div>}
            videoStyle={{
              // width: "700px",
              // height: "350px",
              borderRadius: "0.375rem",
              marginLeft: "0.5rem",
            }}
            onClick={() => setShowModal(true)}
          />
            <div className="flex items-center justify-center">
           
              <p className="text-green-500 text-sm pt-1 mx-2">
              {t('project_content1')}
              </p>
            </div>
        </div>    */}

        <div className="shadow-md w-40 sm:w-72 h-40 sm:h-48 shadow-gray-600 rounded-lg  ">
          <video
            id="video"
            ref={ref}
            // style={{ width: "300px" }}
            className="rounded-md mx-2 ml-4 mb-1 w-32 sm:w-64 h-20 sm:h-36 duration-200 hover:scale-105"
            // autoPlay
            onMouseOver={() => setFocus(true)}
            onMouseOut={() => setFocus(false)}
            muted={true}
            src={slide}
            onEnded={onEndedLoop}
            onClick={() => setShowModal(true)}
          ></video>
          
            <div className="flex items-center justify-center">
              {/* <button></button>
              <button></button> */}
              <p className="text-green-500 text-xs sm:text-sm pt-1 mx-2">
              {/* Implement for Production Control System (PRONES). */}
              {t('project_content1')}
              </p>
            </div>
        </div>   

          <div className="shadow-md w-40 sm:w-72 h-40 sm:h-48  shadow-gray-600 rounded-lg">
            {/* <div className="border-2 h-60 w-48"> */}
            <img 
              src={furuno} alt=""
              className="rounded-md mx-auto w-32 sm:w-64 h-20 sm:h-36 duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              {/* <button></button>
              <button></button> */}
              <p className="text-green-500 text-xs sm:text-sm pt-2 mx-2">
              {/* Develop the barcode system (FURUNO) for Production Line of Industries. */}
              {t('project_content2')}
              </p>
            </div>
          </div>   

          <div className="shadow-md w-40 sm:w-72 h-36 sm:h-48 shadow-gray-600 rounded-lg">
            <img 
              src={productionctrl} alt=""
              // className="rounded-md w-full h-80 duration-200 hover:scale-105"
              className="rounded-md mx-auto w-32 sm:w-64 h-20 sm:h-36 duration-200 hover:scale-105"
            />
            
            <div className="flex items-center justify-center">
              {/* <button></button>
              <button></button> */}
              <p className="text-green-500 text-xs sm:text-sm pt-2 mx-2">
              {/* Develop the Production Control System (KOOGA) for Industries. */}
              {t('project_content3')}
              </p>
            </div>
          </div>        

          

          <div className="shadow-md w-40 sm:w-72 h-36 sm:h-48 shadow-gray-600 rounded-lg">
            <img 
              src={dev} alt=""
              className="rounded-md mx-auto w-32 sm:w-64 h-20 sm:h-36 duration-200 hover:scale-105"
            />
            
            <div className="flex items-center justify-center">
              {/* <button></button>
              <button></button> */}
              <p className="text-green-500 text-xs sm:text-sm pt-2 mx-2">
              {/* Develop the web application mostly from Head Office (Japan). */}
              {t('project_content4')}
              </p>
            </div>
          </div>           

        </div>
      </div>
    </div>
    <Modal isvisible={showModal} onClose={() => setShowModal(false)}>
      <iframe width="100%" height="315" 
      // src="https://www.youtube.com/embed/nwJK-jo91vA" 
      src={slide}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
    </Modal>
    </Fragment>
  )
}

export default Project