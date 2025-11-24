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
    
    // ✅ Fetch testimonials server-side when needed
    let preloadedTestimonials = null;
    if (role === 'testimonials') {
      try {
        const rawTestimonials = await getAllTestimonials();
        // Format testimonials to match API response structure
        preloadedTestimonials = rawTestimonials.map((t) => ({
          id: t.id,
          content: t.content,
          rating: t.rating,
          user: {
            firstName: t.user?.firstName || '',
            lastName: t.user?.lastName || '',
            designation: t.user?.designation || '',
            profilePicture: t.user?.profilePicture || '',
          },
        }));
      } catch (error) {
        console.error("Error preloading testimonials:", error);
        preloadedTestimonials = [];
      }
    }
    
    return (
        <>
            <div>
            {role === 'overview' && <Overview/>}         
            {role === 'testimonials' && <Testimonials preloadedData={preloadedTestimonials} />}         
            {role === 'charts' && <Charts/>}         
            {role === 'gallery' && <Gallery/>}         
            {role === 'faq' && <FAQ/>}         
            </div>
        </>
    );
};

export default AboutPage;