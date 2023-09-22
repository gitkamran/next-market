import React from 'react'
import Search from './Search'
import Account from './Account'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = () => {
    return (
        <header className='w-full shadow-xl z-50'>
            <div className='w-full py-6 border-b'>
                <div className='mx-auto flex items-center justify-between lg:max-w-screen-lg'>
                    <div className='flex items-center gap-4'>
                        <Logo />
                        <Search />
                    </div>

                    <div className='flex items-center gap-4'>
                        <Account />
                    </div>
                </div>
            </div>
            <div className='w-full py-2'>
                <div className='mx-auto lg:max-w-screen-lg'>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header