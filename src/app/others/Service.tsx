import Image from 'next/image'
import React from 'react'

export default function Service({img:{title, image}}: any) {
  return (
    <div className='grid-item'>
      <Image className='rounded-2xl' src={image} alt={title} width={450} height={450}/>
      <h3 className='py-7'>{title}</h3>
    </div>
  )
}
