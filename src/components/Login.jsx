import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { createOrGetUser } from '../utils';

export default function Login() {
    const navigate = useNavigate();
    const fetchCreateOrGetUser = (response) => {
        //save into localstorage
        createOrGetUser(response).then(
            () => {
                navigate('/', {replace:true});
            }
        );

    }

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative h-full w-full'>
                <video src={shareVideo} 
                type='video/mp4' 
                loop 
                controls={false}
                muted
                autoPlay
                className='w-full h-full object-cover' />
            
            <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                <div className='p-5'>
                    <img src={logo}  width='130px' alt="logo" />
                </div>
                <div className='shadow-2xl'>
                    <GoogleLogin onSuccess={(response) => fetchCreateOrGetUser(response)}
                    onError={(response) => console.log(response)} />
                </div>
            </div>
            </div>
        </div>
  )
}
