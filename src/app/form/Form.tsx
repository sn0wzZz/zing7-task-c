'use client'
import { type } from 'os'
import React from 'react'
import toast from 'react-hot-toast'
import { FiMail } from 'react-icons/fi'

export default function Form() {

  const notify = () => toast.success('Получихме Вашият телефон!', {position: 'top-right', duration:2000})

  return (
    <div className='h-auto w-[80%] md:w-[50%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] flex  flex-col justify-center text-center py-10 xl:py-12'>
      <h2 className='text-white my-10'>
        Готиви ли сте да работим заедно?
      </h2>
      <p className='text-white'>
        Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на
        всички въпроси
      </p>
      <div className=' my-16 flex flex-nowrap justify-center'>
        <div className='flex items-center bg-white rounded-l-xl pl-3 xl:pl-5'>
          <FiMail color='grey' size={20} />
          <input
            className=' p-3 w-[12rem] xl:w-auto xl:p-5 xl:text-xl outline-none  border-none bg bg-transparent'
            type='text'
            placeholder='Мобилен телефон'
          />
        </div>
        <button onClick={notify} className='p-3 xl:p-5 xl:px-10 bg-button-100 hover:bg-button-200 xl:text-xl rounded-r-xl border-0 font-bold'>
          Изпрати
        </button>
      </div>
    </div>
  )
}
