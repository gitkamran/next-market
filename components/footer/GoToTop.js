"use client"
import { HiOutlineChevronUp } from 'react-icons/hi'

const GoToTop = () => {
    const TopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <button onClick={TopHandler} className='bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-[0_0_10px_#00000070] hover:shadow-[0_0_10px_#fffff70]'>
            <HiOutlineChevronUp className='text-rose-500/90 text-3xl' />
        </button>
    )
}

export default GoToTop