import React from 'react'
import { FiMail } from 'react-icons/fi'

export default function Form() {
  return (
    <div className='h-auto w-[80%] md:w-[70%] lg:w-[50%] xl:w-[60%] 2xl:w-[60%] flex  flex-col justify-center text-center py-10 xl:py-24'>
      <h1 className='text-white my-10'>
        Готиви ли сте да работим заедно?
      </h1>
      <p className='text-white'>
        Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на
        всички въпроси
      </p>
      <div className=' my-16 flex flex-nowrap justify-center'>
        <div className='flex items-center bg-white rounded-l-xl pl-3 xl:pl-5'>
          <FiMail color='grey' size={30} />
          <input
            className=' p-3 w-[10rem] xl:w-auto xl:p-5 xl:text-xl outline-none  border-none bg bg-transparent'
            type='text'
            placeholder='Мобилен телефон'
          />
        </div>
        <button className='p-3 xl:p-5 xl:px-10 bg-lime-200 xl:text-xl rounded-r-xl border-0'>
          Изпрати
        </button>
      </div>
    </div>
  )
}
