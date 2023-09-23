"use client"

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useSwiper } from 'swiper/react';

const SlideNavButton = () => {
    const swiper = useSwiper();
    return (
        <div className='w-full flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20'>
            <button onClick={() => swiper.slidePrev()} className='z-20 mr-4'>
                <HiChevronRight className="text-rose-500 text-2xl md:text-3xl" />
            </button>
            <button onClick={() => swiper.slideNext()} className='z-20 ml-4'>
                <HiChevronLeft className="text-rose-500 text-2xl md:text-3xl" />
            </button>
        </div>
    );
}

export default SlideNavButton