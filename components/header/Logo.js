import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='w-[240px] h-auto'>
        <Image 
            src="/assets/images/logo/next-market-logo.svg"
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