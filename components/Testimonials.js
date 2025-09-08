"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StarRating from "./star-rating";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


const Testimonials = () => {
  const [emblaApi, setEmblaApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/testimonials`);
        const data = await res.json();
       
        if (data.success) {
         setTestimonials(data.testimonials ? data.testimonials : []);
      } else {
        setError(data.error || "Failed to load testimonials");
      }  
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

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
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] text-primary">
      <div className="w-[85%] mx-auto py-12">
        <div
          className="md:text-4xl text-2xl font-bold mb-8 flex justify-center "
          data-aos="flip-down"
        >
          Testimonials
        </div>

        {loading ? (
          <p className="text-primary font-semibold flex justify-center items-center mt-4 text-xl">
            Loading testimonials...
          </p>
        ) : error ? (
          <p className="text-red-500 font-semibold flex justify-center items-center mt-4 text-xl">
            {error}
          </p>
        ) : !testimonials || testimonials.length === 0 ? (
          <p className="text-primary font-semibold flex justify-center items-center mt-4 text-xl">
            No Testimonials found.
          </p>
        ) : (
          <>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setEmblaApi}
              className="max-2xl:w-[90%] w-full mx-auto"
            >
              <CarouselPrevious data-carousel-prev />
              <CarouselNext data-carousel-next />
              <CarouselContent className="py-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="sm:break-inside-avoid">
                      <blockquote className="flex flex-col gap-4 rounded-lg bg-gray-50 p-6 sm:p-4 shadow-sm h-64 md:h-72 lg:h-84">
                        <div className="flex items-center gap-2 flex-none h-[40%]">
                          <Image
                            alt={`Profile ${testimonial?.user?.firstName}`}
                            src={
                              testimonial?.user?.profilePicture
                                ? testimonial.user.profilePicture
                                : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                            }
                            width="56"
                            height="56"
                            className="size-14 rounded-full object-cover"
                          />
                          <div>
                            <p className="mt-0.5 text-lg font-medium text-primary">
                              {testimonial?.user?.firstName}{" "}
                              {testimonial?.user?.lastName}
                            </p>
                            <p className="mt-0.5 text-sm text-gray-600">
                              ({testimonial?.user?.designation})
                            </p>
                            <div className="flex justify-end gap-0.5 mt-0.5 text-yellow-600">
                              <StarRating rating={testimonial?.rating} />
                            </div>
                          </div>
                        </div>
                        <p className="text-tertiary font-serif text-md text-justify overflow-y-auto flex-1 min-h-0 pr-2">
                          {testimonial?.content}
                        </p>
                      </blockquote>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* ✅ Slide Count */}
            <div className="text-center mt-4 text-md text-tertiary">
              {totalSlides > 0 && `${selectedIndex + 1} / ${totalSlides}`}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Testimonials;
