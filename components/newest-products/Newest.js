"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./cetegories-slider.css";
import SlideNavButton from "./SlideNavButton";
import { useEffect, useState } from "react";

import SingleSlider from "../single-slider/SingleSlider";
import { HiOutlineMegaphone } from "react-icons/hi2";

const Newest = ({ data }) => {
    const [fullData, setFullData] = useState([-1])
    useEffect(() => {
        setFullData(data)
    }, [data])
    return (
        <section className="relative w-full mx-auto lg:max-w-screen-lg p-4 bg-white shadow-md rounded-md">
            <div className="flex items-center gap-2 p-4">
                <HiOutlineMegaphone className="text-3xl text-neutral-500" />
            <h2 className="text-neutral-500 text-lg font-bold">جدیدترین ها</h2>
            </div>
            <div className="px-10">
                {
                    fullData[0] === -1 ?
                        <div className="py-4">
                            <div className="w-full h-[290px] rounded-md bg-neutral-400 animate-pulse">
                            </div>
                        </div>
                        :
                        fullData.length < 1 ?
                            <h2>اطلاعات یافت نشد!</h2> :
                            <Swiper
                                spaceBetween={16}
                                className="swiper"
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
                                <SlideNavButton />
                            </Swiper>
                }
            </div>
        </section>
    )
}

export default Newest