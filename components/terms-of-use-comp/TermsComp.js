"use client"
import React, { useEffect, useState } from 'react'
import { HiOutlineScale } from 'react-icons/hi2'
import PreLoadingTerms from './PreLoadingTerms'

const TermsComp = ({ data }) => {
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
                            <PreLoadingTerms />
                            <PreLoadingTerms />
                            <PreLoadingTerms />
                            <PreLoadingTerms />
                            <PreLoadingTerms />
                        </div>
                        :
                        fullData.length < 1 ?
                            <h2>اطلاعات یافت نشد...</h2> :
                            fullData.map((d, i) => (
                                <div key={i} className='flex gap-2 w-full p-4'>
                                    <HiOutlineScale className='text-3xl text-rose-500/90' />
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

export default TermsComp