import React from 'react'
import { HiArrowLeft, HiDevicePhoneMobile } from 'react-icons/hi2'

const LoginComp = ({ setShowLogin }) => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div onClick={() => setShowLogin(false)} className='fixed inset-0 bg-white/50 z-50'>
            </div>
            <div className='absolute top-12 left-0 z-50 rounded-md shadow-[0_0_10px_#00000050] bg-white p-8 flex flex-col gap-4 min-w-[300px]'>
                <h2 className='text-neutral-500 text-center'>شماره همراه فعال خودرا وارد نمایید تا رمز عبور برای شما ارسال شود</h2>
                <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                    <div className='relative'>
                        <input max={11} type='tel' placeholder='09---------' style={{ direction: "ltr" }} className='text-center rounded-full p-2 outline outline-1 outline-neutral-200 w-full' />
                        <HiDevicePhoneMobile className='text-neutral-400 text-xl absolute top-1/2 right-3 -translate-y-1/2' />
                    </div>
                    <button className='flex items-center justify-center gap-2 rounded-full bg-rose-500/90 text-white p-2 w-full'>
                        <span>ارسال رمز عبور</span>
                        <HiArrowLeft className='text-2xl' />
                    </button>
                </form>
            </div>
        </>
    )
}

export default LoginComp