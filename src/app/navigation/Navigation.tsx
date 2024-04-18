'use client'
import { useState } from 'react'

const tabNames = [
  'Начало',
  'За нас',
  'Услуги',
  'Цени',
  'Как работи',
  'Контакти',
]

const Actions = ({}) => (
  <ul className='flex items-center'>
    <li className='mx-2 p-3 text-xl text-heading hover:bg-slate-100 hover:rounded-lg hover: cursor-pointer'>
      Профил
    </li>
    <li className='border-2 border-heading text-heading p-2 flex items-center rounded-lg text-lg hover:bg-heading hover:text-white hover:rounded-lg hover: cursor-pointer text-nowrap '>
      Заявка за пратка
    </li>
  </ul>
)

export default function Navigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenu = () => {
    setMenuIsOpen((cur) => !cur)
  }

  return (
    <nav
      className={`flex justify-center ${
        menuIsOpen ? 'items-start' : 'items-center'
      } xl:max-w-[100%] font-SpaceGrotesk xl:sticky xl:bg-white top-0 xl:h-auto shadow-lg shadow-white overflow-x-hidden ${
        menuIsOpen ? 'h-[100vh] w-screen top-0 fixed' : 'h-auto'
      } ${
        menuIsOpen
          ? 'bg-tranparent backdrop-blur-lg saturate-[150%]'
          : 'bg-white'
      } ${menuIsOpen ? 'fixed' : 'sticky'} p-2 md:p-5 xl:p-10 `}
    >
      <div className='flex justify-around items-center w-[100%] 2xl:w-[80%]'>
        <div>
          <h3 className='font-bold text-[40px] text-heading'>Website</h3>
        </div>

        <button
          onClick={handleMenu}
          className='block xl:hidden p-3 focus:outline-none'
        >
          {/* Menu Icon */}
          {menuIsOpen ? (
            <svg
              className='w-12 h-12 text-paragraph'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-12 h-12 text-paragraph'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>

        <ul
          className={`${
            menuIsOpen ? 'block' : 'hidden'
          } absolute xl:top-0 top-0 right-0 p-5  xl:p-0 w-full -z-10 lg:z-0  overflow-y-auto xl:relative xl:flex justify-center xl:items-center xl:h-auto xl:right-0 bg-white pt-28`}
        >
          {tabNames.map((tab, i) => (
            <li
              className='p-3 h-[50px] mx-2 text-xl text-menu hover:bg-slate-100 hover:rounded-lg hover: cursor-pointer'
              key={i}
            >
              {tab}
            </li>
          ))}
          <div className='xl:hidden block'>
            <Actions />
          </div>
        </ul>

        <div className='hidden xl:block'>
          <Actions />
        </div>
      </div>
    </nav>
  )
}
