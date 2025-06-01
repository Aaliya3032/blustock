'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../assets/charts/Week1.png";
import img2 from "../assets/charts/Week2.png";
import img3 from "../assets/charts/Week3.png";

const Charts = () => {
  const [emblaApi, setEmblaApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const images = [
    {
      id: 1,
      src: img1,
      alt: "chart1",
    },
    {
      id: 2,
      src: img2,
      alt: "chart2",
    },
    {
      id: 3,
      src: img3,
      alt: "chart3",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // Loop back to start
      }
    }, 5000);

    setTotalSlides(emblaApi.scrollSnapList().length);

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
      <div className="w-[85%] mx-auto py-12">
        <div
          className="text-primary flex flex-col items-start justify-start"
          data-aos="flip-down"
        >
          <span className="md:text-4xl text-2xl font-bold mb-1">
            Results Build Trust
          </span>
          <span className="md:text-xl text-md font-medium">
            (Our Latest Market Hits)
          </span>
        </div>
        <div className="mb-8 mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setEmblaApi}
            className="w-full"
          >
            <CarouselPrevious data-carousel-prev />
            <CarouselNext data-carousel-next />
            <CarouselContent className="py-4">  
              {images.map((image) => (
                <CarouselItem
                  key={image.id}
                >
                  <div className="sm:break-inside-avoid">
                    <div className="flex items-center gap-4 md:w-3/4 w-full mx-auto">
                      <Image
                        alt={image.alt}
                        src={image.src}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* ✅ Slide Count at Bottom */}
          <div className="text-center mt-4 text-md text-tertiary">
            {totalSlides > 0 && `${selectedIndex + 1} / ${totalSlides}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
