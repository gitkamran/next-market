import React from 'react'
import { HiOutlinePhone, HiOutlineEnvelope } from 'react-icons/hi2'

const Contact = () => {
    return (
        <div>
            <div className='flex flex-col gap-4 items-end'>
                <div className='flex items-center gap-1'>
                    <a href="mailto:mkamran.ir@gmail.com" target='_blank' className='text-white'>
                        mkamran.ir@gmail.com
                    </a>
                    <HiOutlineEnvelope className='text-white text-2xl' />
                </div>
                <div className='flex items-center gap-1'>
                    <a href="tel:+989369139993" target='_blank' className='text-white'>
                        09369139993
                    </a>
                    <HiOutlinePhone className='text-white text-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Contact