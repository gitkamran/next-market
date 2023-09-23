import React from 'react'

const PreLoadingTerms = () => {
    return (
        <div className='flex items-start gap-2 w-full'>
            <div className='animate-pulse w-[30px] h-[30px] rounded-full bg-neutral-400'></div>
            <div className='flex flex-col gap-2 w-full'>
                <div className='animate-pulse w-40 h-[28px] rounded-md bg-neutral-400'></div>
                <div className='animate-pulse w-full h-[100px] rounded-md bg-neutral-400'>
                </div>
            </div>
        </div>
    )
}

export default PreLoadingTerms