"use client"
import { useAppContext } from '@/context/appContext/AppContext';
import React from 'react'
import { HiOutlineShoppingBag, HiOutlineUserCircle } from 'react-icons/hi2'

const Account = () => {
    const { cartNumber, setCartNumber } = useAppContext();
    return (
        <div className='flex items-center gap-2'>
            <button className='outline outline-1 outline-rose-500/90 p-2 rounded-md flex items-center gap-1 hover:shadow-md hover:shadow-rose-300 duration-200'>
                <HiOutlineUserCircle className='text-rose-500/90 text-2xl' />
                <span className='text-rose-500/90'>ورود به حساب کاربری</span>
            </button>
            <button className='bg-rose-500/90 p-2 rounded-md outline outline-1 outline-rose-500/90 flex items-center gap-2'>
                <span className='bg-white rounded-md w-6 h-6 flex items-center justify-center text-neutral-600'>{cartNumber}</span>
                <HiOutlineShoppingBag className='text-white text-2xl' />
            </button>
        </div>
    )
}

export default Account