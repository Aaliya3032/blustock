'use client'
import React, { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryImages } from '@/assets/gallery';
import Image from 'next/image';

const Gallery = () => {
  const [emblaApi, setEmblaApi] = useState(null);
  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
       <div className="w-[85%] mx-auto py-12">
       <div
          className="md:text-4xl text-2xl font-bold mb-4 text-primary flex items-center justify-center"
          data-aos="flip-down"
        >
          Visual Vibes
        </div>
         <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setEmblaApi} 
            className="max-2xl:w-[70%] w-full mx-auto"
          >
            <CarouselPrevious data-carousel-prev />
            <CarouselNext data-carousel-next />
            <CarouselContent className="py-4">
              {galleryImages.map((image) => (
                <CarouselItem
                  key={image.id}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[300px] object-cover p-12"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
         </div>
    </div>
  )
}

export default Gallery