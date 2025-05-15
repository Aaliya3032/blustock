import React from 'react';
import { SignupForm } from '../_components/signup-form';
import bg from '../../../assets/login_bg.png'


const RegisterPage = async({params}) => {
    const  role  = params?.role;
    
    return (
        <div className='w-full flex-col h-screen flex items-center justify-center relative'
         style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
        >
            <div className="absolute inset-0 bg-tertiary opacity-40"></div>
            <div className='container relative z-10'>
                <SignupForm role={role} />                
            </div>
        </div>
    );
};

export default RegisterPage;