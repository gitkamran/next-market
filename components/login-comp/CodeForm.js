"use client"
import { useAppContext } from '@/context/appContext/AppContext';
import React, { useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi2'

const CodeForm = ({ setShowLogin, mobile }) => {
    const { setIsLogin } = useAppContext();
    const [code, setCode] = useState("")

    const codeSubmit = (e) => {
        e.preventDefault()
        if (code.length != 4) {
            console.log("error")
        } else if (code !== "1234") {
            console.log("error")
        } else {
            setCode("")
            setIsLogin(true)
            setShowLogin(false)
            localStorage.setItem("isLoggedIn", "TRUE");
        }
    }
    const codeHandler = (e) => {
        setCode(e.target.value)
    }
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-neutral-500 text-center'>رمز وارد شده به شماره {mobile} را وارد کنید.</h2>
            <form onSubmit={codeSubmit} className='flex flex-col gap-4'>
                <div className='relative'>
                    <input maxLength={4} onChange={codeHandler} type='text' placeholder='کد را وارد کنید' style={{ direction: "ltr" }} className='text-center rounded-full p-2 outline outline-1 outline-neutral-200 w-full' />
                </div>
                <button className='flex items-center justify-center gap-2 rounded-full bg-rose-500/90 text-white p-2 w-full'>
                    <span>ورود به برنامه</span>
                    <HiArrowLeft className='text-2xl' />
                </button>
            </form>
        </div>
    )
}

export default CodeForm