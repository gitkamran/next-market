import React from 'react'
import { HiOutlineHeart } from 'react-icons/hi2'

const Favorites = () => {
  return (
    <div className='flex items-center gap-1'>
      <HiOutlineHeart className='text-2xl text-rose-500/90' />
      <span>علاقه مندی ها</span>
    </div>
  )
}

export default Favorites