import React from 'react'
import { galleryImages } from '@/assets/gallery';
import Image from 'next/image';

const Gallery = () => {
 
  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
       <div className="w-[85%] mx-auto py-12">
       <div
          className="md:text-4xl text-2xl font-bold mb-4 text-primary flex items-center justify-start"
          data-aos="flip-down"
        >
          Visual Vibes
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-8">
          {galleryImages.map((image) => (
            <div data-aos="zoom-in" key={image.id} className="overflow-hidden rounded-lg lg:w-72 w-[80%] mx-auto lg:h-72 h-80 shadow-[8px_8px_16px_-6px_rgba(0,0,0,0.4)] relative group">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:opacity-40 hover:scale-105 duration-300 ease-in-out"
              />
              <span className='text-lg font-semibold absolute text-black top-1/2 left-1/4 opacity-0 group-hover:opacity-100'>{image.text}</span>
            </div>
          ))}
        </div>
         </div>
    </div>
  )
}

export default Gallery