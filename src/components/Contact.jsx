import React, { useRef, useState, useEffect } from 'react'
import { MdOutlineMessage } from "react-icons/md"

import { useTranslation } from 'react-i18next';

import ReCAPTCHA from "react-google-recaptcha"

import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'

const Contact = () => {

    const { t } = useTranslation();

    const recaptcha = useRef();

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: ""
      });


    const clientId = "854354152262-kt35e2ov79ve3qtvn91v6sl87i98mf6i.apps.googleusercontent.com"

    const [profile, setProfile] = useState(null)

    useEffect (() => {
        const initClient= () => {
          gapi.client.init({
            clientId: clientId,
            scope: ''
          })
        }
        gapi.load("client:auth2", initClient)
    }, [])

    const onSuccess = (res) => {
        setProfile(res.profileObj)
        setFormValues({
            name: res.profileObj.name,
            email: res.profileObj.email
          });
        console.log('success',res)
    }
    
    const onFailure = (res) => {
        console.log('failed',res)
    }
    
    const logOut = () => {
        setProfile(null)
        setFormValues({
            name: "",
            email: ""
          });
    }

    async function submitForm(event) {
        // event.preventDefault();
        const captchaValue = recaptcha.current.getValue();
        if (!captchaValue) {
            event.preventDefault();
          alert("Please verify the reCAPTCHA!");
        } else {
          // make form submission
          //alert("Form submission successful!");
        //   setFormValues({
        //     name: "",
        //     email: "",
        //     message: ""
        //   });

        // fetch('https://getform.io/f/a73b0a1d-dd73-4323-b58d-8c58c444abe6', {
        //     method: 'post',
        //     body : JSON.stringify({
        //         name: formValues.name,
        //         email: formValues.email,
        //         message: formValues.message
        //     }),
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     }
        //   })
        //   .catch(function(error) {
        //     console.log("error---", error)
        //   });

        }

      }

  return (
   
       


    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div 
            // className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto md:mx-20 h-full"
            className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto w-full h-full"
        >
            <div className=" pb-4">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">{t('contact_header')}</p>
                <p className="text-xs sm:text-base py-4 sm:py-4 ">{t('contact_subheader')}</p>
            </div>

            <div className="flex justify-center items-center">
                {profile ? (
                    <div className="flex flex-row">
                        {/* <div>
                        <img src={profile.imageUrl} alt="user image" />
                        </div> */}
                         
                        {/*<h3>User Logged in</h3>
                        <p>name: {profile.name}</p>
                        <p>Email: {profile.email}</p>
                        <br /> <br /> */}
                        
                        <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut}/>
                        
                    </div>
                ) : (
                    <GoogleLogin 
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    />

                      


                )}

            </div>

            <div className="flex justify-center items-center mt-2"> 
                <form 
                    action="https://getform.io/f/a73b0a1d-dd73-4323-b58d-8c58c444abe6" 
                    method="POST"
                    className="flex flex-col w-full md:w-1/2"
                    // onSubmit={submitForm}
                >
                    <input required type="text" name="name" placeholder={t('contact_name') } 
                        className="text-xs sm:text-base p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        // onChange={(event) => setName(event.target.value)}
                        value={formValues.name}
                        onChange={(e) =>
                            setFormValues({ ...formValues, name: e.target.value })
                        }
                    />
                    <input required type="text" name="email" placeholder={t('contact_email')} 
                        className="text-xs sm:text-base my-4 p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        // onChange={(event) => setEmail(event.target.value)}
                        value={formValues.email}
                        onChange={(e) =>
                            setFormValues({ ...formValues, email: e.target.value })
                        }
                    />
                    <textarea name="message" rows="7" placeholder={t('contact_message')} 
                        className="text-xs sm:text-base p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        // onChange={(event) => setMessage(event.target.value)}
                        value={formValues.message}
                        onChange={(e) =>
                            setFormValues({ ...formValues, message: e.target.value })
                        }
                    ></textarea>

                    <ReCAPTCHA 
                        ref={recaptcha} 
                        sitekey={process.env.REACT_APP_SITE_KEY} 
                        className="flex items-center justify-center mt-4"
                    />
                 

                    <button className="group text-white bg-gradient-to-b from-green-500 to-green-900 px-6 py-0 sm:py-2 my-3 sm:my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                        onClick={submitForm}
                    >
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