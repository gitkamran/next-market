import Link from 'next/link'
import React from 'react'
import { HiOutlineHome, HiOutlineInformationCircle, HiOutlinePhone, HiOutlineScale } from 'react-icons/hi2'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex items-center gap-4'>
                <li>
                    <Link href='/' className='flex items-center gap-1 hover:shadow-md p-2 rounded-md duration-300'>
                        <HiOutlineHome className='text-xl text-rose-500/90' />
                        <span className='text-sm text-neutral-600'>صفحه اصلی</span>
                    </Link>
                </li>
                <li>
                    <Link href='/terms-of-use' className='flex items-center gap-1 hover:shadow-md p-2 rounded-md duration-300'>
                        <HiOutlineScale className='text-xl text-rose-500/90' />
                        <span className='text-sm text-neutral-600'>قوانین و مقررات</span>
                    </Link>
                </li>
                <li>
                    <Link href='/about-us' className='flex items-center gap-1 hover:shadow-md p-2 rounded-md duration-300'>
                        <HiOutlineInformationCircle className='text-xl text-rose-500/90' />
                        <span className='text-sm text-neutral-600'>درباره ما</span>
                    </Link>
                </li>
                <li>
                    <Link href='/contact-us' className='flex items-center gap-1 hover:shadow-md p-2 rounded-md duration-300'>
                        <HiOutlinePhone className='text-xl text-rose-500/90' />
                        <span className='text-sm text-neutral-600'>تماس با ما</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar