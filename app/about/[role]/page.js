import React from 'react';
import bg from '../../../assets/login_bg.png'
import FAQ from '@/components/FAQ';
import Overview from '@/components/Overview';
import Testimonials from '@/components/Testimonials';
import { getAllTestimonials } from '@/queries/testimonials';
import Gallery from '@/components/Gallery';


const AboutPage = async({params}) => {
    const  role  = params?.role;
    const rawTestimonials = await getAllTestimonials();

    const testimonials = rawTestimonials.map(t => ({
        id: t.id,
        content: t.content,
        rating: t.rating,
        user: {
          firstName: t.user.firstName,
          lastName: t.user.lastName,
          designation: t.user.designation,
          profilePicture: t.user.profilePicture
        }
        // Remove or convert any non-serializable fields like courseId, ObjectId, etc.
      }));
    
    return (
        <>
            <div>
            {role === 'overview' && <Overview/>}         
            {role === 'testimonials' && <Testimonials testimonials={testimonials}/>}         
            {role === 'gallery' && <Gallery/>}         
            {role === 'faq' && <FAQ/>}         
            </div>
        </>
    );
};

export default AboutPage;