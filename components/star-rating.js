import Image from 'next/image'
import React from 'react'
import img from '../assets/images/star.svg'

const StarRating = ({rating}) => {
  const stars = new Array(rating).fill(0)
  return (
    <>
    {
      stars.map((star,index) => (
        <Image alt='Rating' key={index} src={img} width={20} height={20}/>
      )
      )
    }
    </>
  )
}

export default StarRating