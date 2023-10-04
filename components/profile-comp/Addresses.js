import React from 'react'
import { HiOutlineMapPin } from 'react-icons/hi2'

const Addresses = () => {
  return (
    <div className='flex items-center gap-1'>
      <HiOutlineMapPin className='text-2xl text-rose-500/90' />
      <span>آدرس ها</span>
    </div>
  )
}

export default Addresses