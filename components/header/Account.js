"use client"
import { useAppContext } from '@/context/appContext/AppContext';
import React, { useState } from 'react'
import { HiOutlineShoppingBag, HiOutlineUserCircle } from 'react-icons/hi2'
import LoginComp from '../login-comp/LoginComp';
import Link from 'next/link';

const Account = () => {
    const { cartNumber, isLogin } = useAppContext();
    const [showLogin, setShowLogin] = useState(false)
    return (
        <div className='relative flex items-center gap-2'>
            {isLogin ?
                <button className='outline outline-1 outline-rose-500/90 p-2 rounded-md hover:shadow-md hover:shadow-rose-300 duration-200'>
                    <Link href="/profile" className='flex items-center gap-1'>
                        <HiOutlineUserCircle className='text-rose-500/90 text-2xl' />
                        <span className='text-rose-500/90'>مشاهده پروفایل</span>
                    </Link>
                </button>
                :
                <button onClick={() => setShowLogin(!showLogin)} className='outline outline-1 outline-rose-500/90 p-2 rounded-md flex items-center gap-1 hover:shadow-md hover:shadow-rose-300 duration-200'>
                    <HiOutlineUserCircle className='text-rose-500/90 text-2xl' />
                    <span className='text-rose-500/90'>ورود به حساب کاربری</span>
                </button>
            }
            <button className='bg-rose-500/90 p-2 rounded-md outline outline-1 outline-rose-500/90 flex items-center gap-2'>
                <span className='bg-white rounded-md w-6 h-6 flex items-center justify-center text-neutral-600'>{cartNumber}</span>
                <HiOutlineShoppingBag className='text-white text-2xl' />
            </button>
            {showLogin &&
                <LoginComp setShowLogin={setShowLogin} />
            }
        </div>
    )
}

export default Account