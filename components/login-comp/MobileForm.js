"use client"
import { HiArrowLeft, HiDevicePhoneMobile } from 'react-icons/hi2'

const MobileForm = ({ setCodeFormShow, setMobile, mobile }) => {
    const mobileSubmit = async (e) => {
        e.preventDefault()
        if (mobile.length != 11) {
            console.log("error")
        } else {
            setCodeFormShow(true)
        }
    }
    const mobileHandler = (e) => {
        setMobile(e.target.value)
    }
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-neutral-500 text-center'>شماره همراه فعال خودرا وارد نمایید تا رمز عبور برای شما ارسال شود</h2>
            <form onSubmit={mobileSubmit} className='flex flex-col gap-4'>
                <div className='relative'>
                    <input onChange={mobileHandler} maxLength={11} type='tel' placeholder='09---------' style={{ direction: "ltr" }} className='text-center rounded-full p-2 outline outline-1 outline-neutral-200 w-full' />
                    <HiDevicePhoneMobile className='text-neutral-400 text-xl absolute top-1/2 right-3 -translate-y-1/2' />
                </div>
                <button className='flex items-center justify-center gap-2 rounded-full bg-rose-500/90 text-white p-2 w-full'>
                    <span>ارسال رمز عبور</span>
                    <HiArrowLeft className='text-2xl' />
                </button>
            </form>
        </div>
    )
}

export default MobileForm