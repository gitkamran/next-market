import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import Copyright from './Copyright'
import Contact from './Contact'
import Logo from './Logo'
import GoToTop from './GoToTop'

const Footer = () => {
    return (
        <footer className='bg-rose-500/90 w-full'>
            <div className='mx-auto lg:max-w-screen-lg flex flex-col py-2 w-full'>
                <div className='flex justify-between gap-4 py-8 w-full'>
                    <div className='flex flex-col gap-4'>
                        <Logo />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white text-sm font-bold'>دسترسی سریع</h2>
                        <Navbar />
                    </div>
                    <div className='flex flex-col items-end gap-4'>
                        <h2 className='text-white text-sm font-bold'>تماس با ما</h2>
                        <Contact />
                    </div>
                    <GoToTop />
                </div>
                <Copyright />
            </div>
        </footer>
    )
}

export default Footer