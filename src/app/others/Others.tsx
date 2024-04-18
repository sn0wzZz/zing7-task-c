import React from 'react'
import { services } from '../../../public/data'
import Service from './Service'

export default function Others() {
  return (
    <div className=' my-10 xl:my-20 xl:mx-32 mx-2'>
      <h2>Други услуги</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10  justify-items-center'>
        {services.map((img,i)=> <Service key={i} img={img}/>)}
      </div>
    </div>
  )
}
