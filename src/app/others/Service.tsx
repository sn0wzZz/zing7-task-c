'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Service({img:{title, image}}: any) {
  const[isHovering, setIsHovering] = useState(false)
  const handleHover = () => {setIsHovering(cur=>!cur)}
  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover}  className={`grid-item hover:bg-slate-100 p-5 rounded-2xl transition-colors duration-200 ease-linear hover:cursor-pointer`}>
      <Image className={`rounded-2xl ${isHovering&&'scale-105'} transition-all hover:shadow-xl`} src={image} alt={title} width={450} height={450} />
      <div className='flex items-end'>
      <h3 className='pt-7'>{title}</h3>
      <FaArrowRightLong className={`ml-auto ${isHovering? 'opacity-100 translate-x-0': 'opacity-0 translate-x-[-10px]'} transition-all duration-100 ease-linear`}  color='text-paragraph' size={30}/>
      </div>
    </div>
  )
}
