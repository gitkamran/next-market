"use client"
import React, { useEffect, useState } from 'react'
import PreLoadingAbout from './PreLoadingContact'

const ContactComp = ({ data }) => {
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
                            <PreLoadingAbout />
                            <PreLoadingAbout />
                            <PreLoadingAbout />
                            <PreLoadingAbout />
                        </div>
                        :
                        fullData.length < 1 ?
                            <h2>اطلاعات یافت نشد...</h2> :
                            fullData.map((d, i) => (
                                <div key={i} className='flex flex-col gap-2 w-full p-4'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-3 h-3 rounded-full bg-rose-500/90'></div>
                                        <h2 className='text-neutral-400'>{d.title}</h2>
                                    </div>
                                    <h2 className='text-lg font-bold text-neutral-600'>{d.desc}</h2>
                                </div>
                            ))
                }
            </div>
        </main>
    )
}

export default ContactComp