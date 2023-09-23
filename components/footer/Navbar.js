import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex flex-col gap-4'>
                <li>
                    <Link href='/terms-of-use' className='flex items-center gap-1 text-white'>
                        <span className='text-sm'>قوانین و مقررات</span>
                    </Link>
                </li>
                <li>
                    <Link href='/about-us' className='flex items-center gap-1 text-white'>
                        <span className='text-sm'>درباره ما</span>
                    </Link>
                </li>
                <li>
                    <Link href='/contact-us' className='flex items-center gap-1 text-white'>
                        <span className='text-sm'>تماس با ما</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar