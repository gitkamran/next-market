import Link from 'next/link'
import { HiChevronLeft } from 'react-icons/hi2'
import UserInfo from './UserInfo'

const BreadCrumb = ({ link, setLink, setDetails }) => {
    return (
        <div className='flex flex-wrap items-center gap-1 md:gap-2 bg-neutral-300 rounded-md p-2 mx-auto w-full lg:max-w-screen-lg'>
            <Link href="/" className='text-neutral-600 text-sm md:text-base'>صفحه اصلی</Link>
            <HiChevronLeft className='text-2xl text-rose-500/90' />
            <Link onClick={() => {
                setDetails(<UserInfo />)
                setLink("اطلاعات کاربری")
            }} href="/profile" className='text-neutral-600 text-sm md:text-base'>پروفایل</Link>
            <HiChevronLeft className='text-2xl text-rose-500/90' />
            <h2 className='text-neutral-600 text-sm md:text-base'>{link}</h2>
        </div>
    )
}

export default BreadCrumb