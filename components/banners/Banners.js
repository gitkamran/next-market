"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Banners = ({ data }) => {
    const [fullData, setFullData] = useState([-1])
    useEffect(() => {
        setFullData(data)
    }, [data])
    return (
        <section className='w-full mx-auto lg:max-w-screen-lg'>
            {fullData[0] === -1 ?
                <div className='flex items-center justify-between gap-4 w-full h-full'>
                    <div className='bg-neutral-400 animate-pulse rounded-md h-[126px] w-full'></div>
                    <div className='bg-neutral-400 animate-pulse rounded-md h-[126px] w-full'></div>
                </div>
                :
                fullData.length < 1 ?
                    <h2>Not Found...</h2> :
                    <div className='flex items-center justify-between gap-4 w-full'>
                        {fullData.map((d, i) => (
                            <Link key={i} href={d.url} target='_blank' className='w-full h-auto rounded-md'>
                                <Image
                                    src={d.image}
                                    alt={d.title}
                                    width={800}
                                    height={200}
                                    priority
                                    className="w-full h-auto rounded-md"
                                />
                            </Link>
                        ))}
                    </div>
            }
        </section>
    )
}

export default Banners