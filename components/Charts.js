import Image from 'next/image'
import React from 'react'
import img1 from '../assets/Hero2.jpg'
import img2 from '../assets/Hero3.jpg'
import { ArrowRightCircle } from 'lucide-react'

const Charts = () => {
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
        <div className='mb-8 mt-12'>
          <div className='flex flex-row justify-between'>
            <div>
              <Image
              src={img1}
              alt='img1'
              />
            </div>
            <div>
            <ArrowRightCircle className='translate-y-24 text-tertiary'/>
            </div>
            <div>
            <Image
              src={img2}
              alt='img2'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts