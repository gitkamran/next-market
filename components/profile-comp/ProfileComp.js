"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import BreadCrumb from './BreadCrumb'
import Image from 'next/image'
import { HiChevronLeft, HiMiniArrowRightOnRectangle, HiOutlineHeart, HiOutlineMapPin, HiOutlineUserCircle } from 'react-icons/hi2'
import { useAppContext } from '@/context/appContext/AppContext'
import UserInfo from './UserInfo'
import Addresses from './Addresses'
import Favorites from './Favorites'

const ProfileComp = () => {
    const { setIsLogin } = useAppContext();
    const router = useRouter()
    useEffect(() => {
        const user = localStorage.getItem("isLoggedIn")
        !user && router.push("/")
    }, [router])

    const logoutHandler = () => {
        setIsLogin(false)
        localStorage.removeItem("isLoggedIn")
        router.push("/")
    }

    const [details, setDetails] = useState(<UserInfo />)

    return (
        <main className="flex flex-col gap-4 items-center w-full min-h-screen bg-neutral-200/50 py-4">
            <BreadCrumb />
            <div className='mx-auto w-full lg:max-w-screen-lg'>
                <div className='flex gap-4'>
                    <div className='basis-1/3'>
                        <div className='rounded-md bg-white shadow-[0_0_5px_#00000030] px-2 py-4'>
                            <div>
                                <div className='flex flex-col items-center gap-4 border-b border-b-neutral-200 pb-2 mb-2'>
                                    <div className='w-32 h-32'>
                                        <Image
                                            src="/assets/images/profile/man.png"
                                            alt='پروفایل کاربری'
                                            width={512}
                                            height={512}
                                            priority
                                            className='w-auto h-auto'
                                        />
                                    </div>
                                    <div className='flex items-center flex-col gap-1'>
                                        <h2 className='text-lg text-neutral-500'>محمد</h2>
                                        <h2 className='text-neutral-400'>09369139993</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div onClick={() => setDetails(<UserInfo />)} className='cursor-pointer flex items-center justify-between p-2 rounded-md hover:shadow-[0_0_5px_#00000030] duration-300'>
                                    <div className='flex items-center gap-1'>
                                        <HiOutlineUserCircle className='text-2xl text-rose-500/90' />
                                        <span>اطلاعات کاربری</span>
                                    </div>
                                    <HiChevronLeft className='text-2xl text-neutral-500' />
                                </div>
                                <div onClick={() => setDetails(<Addresses />)} className='cursor-pointer flex items-center justify-between p-2 rounded-md hover:shadow-[0_0_5px_#00000030] duration-300'>
                                    <div className='flex items-center gap-1'>
                                        <HiOutlineMapPin className='text-2xl text-rose-500/90' />
                                        <span>آدرس ها</span>
                                    </div>
                                    <HiChevronLeft className='text-2xl text-neutral-500' />
                                </div>
                                <div onClick={() => setDetails(<Favorites />)} className='cursor-pointer flex items-center justify-between p-2 rounded-md hover:shadow-[0_0_5px_#00000030] duration-300'>
                                    <div className='flex items-center gap-1'>
                                        <HiOutlineHeart className='text-2xl text-rose-500/90' />
                                        <span>علاقه مندی ها</span>
                                    </div>
                                    <HiChevronLeft className='text-2xl text-neutral-500' />
                                </div>
                                <div onClick={logoutHandler} className='cursor-pointer flex items-center justify-between p-2 rounded-md hover:shadow-[0_0_5px_#00000030] duration-300'>
                                    <div className='flex items-center gap-1'>
                                        <HiMiniArrowRightOnRectangle className='text-2xl text-rose-500/90' />
                                        <span>خروج</span>
                                    </div>
                                    <HiChevronLeft className='text-2xl text-neutral-500' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3'>
                        <div className='w-full min-h-full rounded-md bg-white shadow-[0_0_5px_#00000030] px-2 py-4'>
                            {details}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProfileComp