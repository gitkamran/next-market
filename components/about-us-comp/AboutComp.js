"use client"
import React, { useEffect, useState } from 'react'
import { HiOutlineInformationCircle } from 'react-icons/hi2'
import PreLoadingAbout from './PreLoadingAbout'

const AboutComp = ({ data }) => {
    const [fullData, setFullData] = useState([-1])
    useEffect(() => {
        setFullData(data)
    }, [data])

    return (
        <main className="flex flex-col gap-4 items-center w-full min-h-screen bg-neutral-200/50 py-4">
            <div className='mx-auto w-full lg:max-w-screen-lg rounded-md bg-white shadow-[0_0_5px_#00000030]'>
                {
                    fullData[0] === -1 ?
                        <div className='w-full p-4 flex flex-col gap-4'>
                            <div className='flex items-start gap-2 w-full'>
                                <div className='animate-pulse w-[30px] h-[30px] rounded-full bg-neutral-400'></div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <div className='animate-pulse w-40 h-[20px] rounded-md bg-neutral-400'></div>
                                    <div className='animate-pulse w-full h-[100px] rounded-md bg-neutral-400'></div>
                                </div>
                            </div>
                            <PreLoadingAbout />
                            <PreLoadingAbout />
                            <PreLoadingAbout />
                            <PreLoadingAbout />
                        </div>
                        :
                        fullData.length < 1 ?
                            <h2>اطلاعات یافت نشد...</h2> :
                            fullData.map((d, i) => (
                                <div key={i} className='flex gap-2 w-full p-4'>
                                    <HiOutlineInformationCircle className='text-3xl text-rose-500/90' />
                                    <div className='flex flex-col gap-2 w-full'>
                                        <h2 className='text-lg font-bold text-neutral-600'>{d.title}</h2>
                                        <p className='text-sm text-neutral-400'>{d.desc}</p>
                                    </div>
                                </div>
                            ))
                }
            </div>
        </main>
    )
}

export default AboutComp