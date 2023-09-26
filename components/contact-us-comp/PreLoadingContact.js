import React from 'react'

const PreLoadingContact = () => {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex items-center gap-2'>
                <div className='animate-pulse w-[20px] h-[20px] rounded-full bg-neutral-400'></div>
                <div className='animate-pulse w-[100px] h-[20px] rounded-md bg-neutral-400'></div>
            </div>
            <div className='animate-pulse w-[33%] h-[28px] rounded-md bg-neutral-400'></div>
        </div>
    )
}

export default PreLoadingContact