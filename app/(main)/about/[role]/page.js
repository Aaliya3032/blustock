import React from 'react';
import FAQ from '@/components/FAQ';
import Overview from '@/components/Overview';
import Testimonials from '@/components/Testimonials';
import { getAllTestimonials } from '@/queries/testimonials';
import Gallery from '@/components/Gallery';
import Charts from '@/components/Charts';

export const metadata = {
  title: 'About Us - Blustock Consultants',
  description: 'Learn more about Blustock Consultants, our mission, and our team.',
};


const AboutPage = async({params}) => {
    const  { role }  = await params;
    
    return (
        <>
            <div>
            {role === 'overview' && <Overview/>}         
            {role === 'testimonials' && <Testimonials/>}         
            {role === 'charts' && <Charts/>}         
            {role === 'gallery' && <Gallery/>}         
            {role === 'faq' && <FAQ/>}         
            </div>
        </>
    );
};

export default AboutPage;