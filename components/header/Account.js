import React from 'react'
import { HiOutlineShoppingBag, HiOutlineUserCircle } from 'react-icons/hi2'

const Account = () => {
    return (
        <div className='flex items-center gap-2'>
            <button className='outline outline-1 outline-rose-500/90 p-2 rounded-md flex items-center gap-1 hover:shadow-md hover:shadow-rose-300 duration-200'>
                <HiOutlineUserCircle className='text-rose-500/90 text-2xl' />
                <span className='text-rose-500/90'>ورود به حساب کاربری</span>
            </button>
            <button className='bg-rose-500/90 p-2 rounded-md outline outline-1 outline-rose-500/90'>
                <HiOutlineShoppingBag className='text-white text-2xl' />
            </button>
        </div>
    )
}

export default Account