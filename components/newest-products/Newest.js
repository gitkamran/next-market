"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

import SingleSlider from "../single-slider/SingleSlider";
import { HiChevronLeft, HiChevronRight, HiOutlineMegaphone } from "react-icons/hi2";

const Newest = ({ data }) => {
    const [fullData, setFullData] = useState([-1])
    useEffect(() => {
        setFullData(data)
    }, [data])

    const slideRef = useRef()
    const handlePrev = () => {
        slideRef.current.swiper.slidePrev()
    }
    const handleNext = () => {
        slideRef.current.swiper.slideNext()
    }
    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst: true,
        isLast: false
    })
    const onSlideChange = swiper => {
        handleSlideByState({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd
        })
    }
    const { isLast, isFirst } = slideBegOrNot;
    return (
        <section className="w-full mx-auto lg:max-w-screen-lg p-4 bg-white shadow-md rounded-md">
            <div className="flex items-center gap-2 p-4">
                <HiOutlineMegaphone className="text-3xl text-neutral-500" />
                <h2 className="text-neutral-500 text-lg font-bold">جدیدترین ها</h2>
            </div>

            <div className="px-10 relative">
                {
                    fullData[0] === -1 ?
                        <div className="py-4">
                            <div className="w-full h-[290px] rounded-md bg-neutral-400 animate-pulse">
                            </div>
                        </div>
                        :
                        fullData.length < 1 ?
                            <h2>اطلاعات یافت نشد!</h2> :
                            <>
                                {!isFirst && <button onClick={handlePrev} className={`z-20 absolute top-1/2 -translate-y-1/2 right-0`}>
                                    <HiChevronRight className="text-rose-500/90 text-2xl md:text-3xl" />
                                </button>}

                                {!isLast && <button onClick={handleNext} className={`z-20 absolute top-1/2 -translate-y-1/2 left-0`}>
                                    <HiChevronLeft className="text-rose-500/90 text-2xl md:text-3xl" />
                                </button>}
                                <Swiper
                                    ref={slideRef}
                                    onSlideChange={onSlideChange}
                                    navigation={false}
                                    spaceBetween={16}
                                    // className="swiper"
                                    breakpoints={{
                                        300: {
                                            slidesPerView: 2
                                        },
                                        600: {
                                            slidesPerView: 3
                                        },
                                        1024: {
                                            slidesPerView: 4
                                        },
                                        1280: {
                                            slidesPerView: 5
                                        },
                                    }}
                                >
                                    {fullData.map((d, i) => (
                                        <SwiperSlide key={i}>
                                            <SingleSlider data={d} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                }
            </div>
        </section>
    )
}

export default Newest