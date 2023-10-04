import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'

const UserInfo = () => {
  return (
    <div className='flex items-center gap-1'>
      <HiOutlineUserCircle className='text-2xl text-rose-500/90' />
      <span>اطلاعات کاربری</span>
    </div>
  )
}

export default UserInfo