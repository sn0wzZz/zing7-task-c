import React from 'react'

export default function Section({children, bgColor='white'}:any) {
  return <div className={`w-full flex items-center justify-center ${bgColor}`}>{children}</div>
}
