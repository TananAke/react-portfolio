import React, { Fragment, useState }  from 'react'

import { useTranslation } from 'react-i18next';


import Modal from './Modal'

import { MdLocationPin } from 'react-icons/md'

const Workplace = () => {

  const { t } = useTranslation();




  const [showModal, setShowModal] = useState(false)

  const [showMap, setShowMap] = useState(true)

  const [srcMap, setSrcMap] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934877.790929504!2d90.80595798831295!3d12.820578967370954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sth!4v1689861819283!5m2!1sen!2sth")

  const place = [
    {
        id: 1,
        name: 'M.SOFT JAPAN',
        location: 'Ueno Office',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6399392407416!2d139.7736036751015!3d35.71047712836802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e9f1ceb54ff%3A0x48e1c01564817e1b!2zSmFwYW4sIOOAkjExMC0wMDA1IFRva3lvLCBUYWl0byBDaXR5LCBVZW5vLCA2LWNoxY1tZeKIkjE24oiSMjAg5p2-5p2R44OT44OrIDJm!5e0!3m2!1sen!2sth!4v1689948039283!5m2!1sen!2sth',
    },
    {
      id: 2,
      name: 'KEIHIN THERMAL TECHNOLOGY (THAILAND) CO., LTD.',
      location: t('workplace_keihin'),
      gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.4251295670265!2d100.63814727501806!3d14.344791386111803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d8a15bd58984f%3A0xf4c5ccdfca01f44d!2sKEIHIN%20THERMAL%20TECHNOLOGY%20(%20THAILAND%20)%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1689837650732!5m2!1sen!2sth',
    },
    {
      id: 3,
      name: 'FURUKAWA UNIC (THAILAND) CO.,LTD.',
      location: t('workplace_fut'),
      gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.520893638164!2d101.14803917441306!3d13.002466587315745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102ddadb56e365d%3A0x754d724bb63dbe6b!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4n-C4ueC4o-C4ueC4geC4suC4p-C4siDguKLguLnguJnguLTguIQgKOC5hOC4l-C4ouC5geC4peC4meC4lOC5jCkg4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sen!2sth!4v1689862449208!5m2!1sen!2sth',
    },
    {
      id: 4,
      name: 'TOACS (THAILAND) CO., LTD.',
      location: t('workplace_toacs'),
      gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.632597320309!2d101.01228607442178!3d13.435053986924562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3651cbc57359%3A0x7448a2b9247d845!2sTOACS%20(Thailand)%20Co..LTD!5e0!3m2!1sen!2sth!4v1689863345229!5m2!1sen!2sth',
    },
    {
      id: 5,
      name: 'FURUYA INDUSTRIES (THAILAND) CO., LTD.',
      location: t('workplace_furuya'),
      gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.631116249837!2d100.6702587744409!3d14.3328470861224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d8bd1ad396009%3A0x828ca52447f4c5db!2sFuruya%20industries!5e0!3m2!1sen!2sth!4v1689863496609!5m2!1sen!2sth',
    },
    {
      id: 6,
      name: 'AIPHONE COMMUNICATIONS (THAILAND) CO., LTD.',
      location: t('workplace_aip'),
      gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.4712405245778!2d101.03920327442205!3d13.445023386915631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3813f677f671%3A0xa7c7a5e237975dbd!2sAiphone%20Communications%20(Thailand)%20Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1689863579552!5m2!1sen!2sth',
    },
    {
      id: 7,
      name: 'KYOKUYO GLOBAL SEAFOODS CO., LTD.',
      location: t('workplace_kgs'),
      gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.077525853602!2d100.25839056270154!3d13.554763887583757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2b91d2d82fb15%3A0x745470630552d1b7!2sKyokuyo%20Global%20Seafood%20Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1689863723535!5m2!1sen!2sth',
    },
  ]

  const VideoModal = (props) => {
    return <div >
      <iframe
          title={props.src}
          allowFullScreen
          frameBorder="0"
          //  height="315px"
          src={props.src}
          // width="560px"
          className=" w-48 h-36 md:w-96 md:h-96 ml-16 mb-1 pt-0"
      />
    </div>
  }

    
  

  return (
    <Fragment>
    <div name="workplace"
      // className="pt-40 sm:pt-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div 
        // className="max-w-screen-lg p-4 mx-auto md:mx-20  flex flex-col justify-center w-full h-full"
        className="max-w-screen-lg p-4 mx-auto   flex flex-col justify-center w-full h-full"
      >
        <div className="pb-3 md:pb-8 ">
                <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">{t('workplace_header')}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="">
            {/* <GoogleMap 
            // class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            className="w-auto"
            >

              <Marker position={{lat: 13.7563, lng: 50}} />
            </GoogleMap> */}

         

            {/* <MapChart /> */}

            {showMap ? <VideoModal 
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.4251295670265!2d100.63814727501806!3d14.344791386111803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d8a15bd58984f%3A0xf4c5ccdfca01f44d!2sKEIHIN%20THERMAL%20TECHNOLOGY%20(%20THAILAND%20)%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1689837650732!5m2!1sen!2sth"
              src= {srcMap}
              /> : null}
          </div>

          <div className="ml-5">
            {place.map(({id, name, location, gmap}) => (
              <div  
                    className="group flex flex-col px-2 mt-0 mr-0 mb-2 md:mb-2 ml-0 rounded-md  hover:bg-green-800 "
                    // onClick={() => setShowModal(true)}
                    onClick={() => {
                      setSrcMap(gmap)
                      setShowMap(true)
                    }}
                >
                <h3  className= " text-green-500 group-hover:text-white text-xs md:text-base">{name}</h3>
                <div className="flex flex-row">
                  <MdLocationPin size={25} className="ml-1 text-red-500 group-hover:scale-110 group-hover:-rotate-12 duration-300"/>
                  <h4 name="secondtext" className="text-green-500 group-hover:text-white text-xs md:text-sm">                
                    {location}
                  </h4>
                </div>
              </div>
            ))}

           




            {/* <Widecard title="KEIHIN THERMAL TECHNOLOGY (THAILAND) CO., LTD. " where="Rojana Industrial Park, Ayutthaya" />
            <Widecard title="FURUKAWA UNIC (THAILAND) CO.,LTD. " where="Eastern Seaboard Industrial Estate, Rayong" />
            <Widecard title="TOACS (THAILAND) CO., LTD. " where="Amata City Chonburi Industrial estate, Chonburi" />
            <Widecard title="FURUYA INDUSTRIES (THAILAND) CO., LTD. " where="Rojana Industrial Park2, Ayutthaya" />
            <Widecard title="AIPHONE COMMUNICATIONS (THAILAND) CO., LTD. " where="Amata Nakhon Industrial Estate, Chonburi" />
            <Widecard title="KYOKUYO GLOBAL SEAFOODS CO., LTD." where="Samut Sakhon" /> */}
          </div>
          
        </div>
        
      </div>
    </div>

    <Modal isvisible={showModal} onClose={() => setShowModal(false)} >
        {/* <p className="text-green-900 font-semibold border-b-2 border-gray-500 inline ml-40 mb-5">Please send email for full CV</p> */}
        <iframe width="100%" height="400" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.4251295670265!2d100.63814727501806!3d14.344791386111803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d8a15bd58984f%3A0xf4c5ccdfca01f44d!2sKEIHIN%20THERMAL%20TECHNOLOGY%20(%20THAILAND%20)%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1689837650732!5m2!1sen!2sth"
        // src={slide}
        title="Display Map" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        
        </iframe>
      
    </Modal>
    </Fragment>
  )
}

export default Workplace