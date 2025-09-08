import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";
import StarRating from "@/components/star-rating";

const Testimonials = ({ testimonials }) => {
  // console.log("kawhefsgv==",testimonials);

  return (
    <section className="pb-8 md:pb-12 lg:pb-24">
      <div className="container">
        <SectionTitle className="mb-6 text-primary">Testimonials</SectionTitle>
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-2xl:w-[90%] w-full mx-auto"
        >
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent className="py-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="sm:break-inside-avoid">
                  <blockquote className="flex flex-col gap-4 rounded-lg bg-gray-50 p-6  sm:p-4 shadow-sm h-64 md:h-72 lg:h-84">
                    <div className="flex items-center  gap-2 flex-none h-[40%]">
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
                        <p className="mt-0.5 text-lg font-medium text-gray-900">
                          {testimonial?.user?.firstName}{" "}
                          {testimonial?.user?.lastName}
                        </p>
                        <div className="flex justify-center gap-0.5 text-yellow-600">
                          <StarRating rating={testimonial?.rating} />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-justify overflow-y-auto flex-1 min-h-0 pr-2">
                      {testimonial?.content}
                    </p>
                  </blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
