import React from 'react'

export default function Main({ children }: any) {
  return (
    <main className='flex justify-center my-10'>
      <div className='max-w-4xl w-full'>{children}</div>
    </main>
  )
}
