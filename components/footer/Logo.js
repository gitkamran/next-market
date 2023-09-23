import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href={'/'} className='w-[180px] h-auto'>
            <Image
                src="/assets/images/logo/next-market-logo-footer.svg"
                alt='فروشگاه آنلاین Next'
                width={240}
                height={60}
                priority
                className='w-auto h-auto'
            />
        </Link>
    )
}

export default Logo