import Link from 'next/link'
import React from 'react'
import { HiOutlineHome, HiOutlineInformationCircle, HiOutlinePhone, HiOutlineScale } from 'react-icons/hi2'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex items-center gap-4'>
                <li>
                    <Link href='/' className='flex items-center gap-1 text-rose-500 hover:shadow-md p-2 rounded-md duration-300'>
                        <HiOutlineHome className='text-lg' />
                        <span className='text-sm'>صفحه اصلی</span>
                    </Link>
                </li>
                <li>
                    <Link href='/' className='flex items-center gap-1 text-rose-500 hover:shadow-md p-2 rounded-md duration-300'>
                        <HiOutlineScale className='text-lg' />
                        <span className='text-sm'>قوانین و مقررات</span>
                    </Link>
                </li>
                <li>
                    <Link href='/' className='flex items-center gap-1 text-rose-500 hover:shadow-md p-2 rounded-md duration-300'>
                        <HiOutlineInformationCircle className='text-lg' />
                        <span className='text-sm'>درباره ما</span>
                    </Link>
                </li>
                <li>
                    <Link href='/' className='flex items-center gap-1 text-rose-500 hover:shadow-md p-2 rounded-md duration-300'>
                        <HiOutlinePhone className='text-lg' />
                        <span className='text-sm'>تماس با ما</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar