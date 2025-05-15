import React from 'react';
import bg from '../../../assets/login_bg.png'


const AboutPage = async({params}) => {
    const  role  = params?.role;
    
    return (
        <div className='w-full h-screen'
        >
            <div className='container'>
                     {role}         
            </div>
        </div>
    );
};

export default AboutPage;