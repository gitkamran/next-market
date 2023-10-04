import Link from 'next/link'
import { HiChevronLeft } from 'react-icons/hi2'

const BreadCrumb = () => {
    return (
        <div className='flex flex-wrap items-center gap-1 md:gap-2 bg-neutral-300 rounded-md p-2 mx-auto w-full lg:max-w-screen-lg'>
            <Link href="/" className='text-neutral-600 text-sm md:text-base'>صفحه اصلی</Link>
            <HiChevronLeft className='text-2xl text-rose-500/90' />
            <Link href="/profile" className='text-neutral-600 text-sm md:text-base'>پروفایل</Link>
        </div>
    )
}

export default BreadCrumb