"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./cetegories-slider.css";
import SlideNavButton from "./SlideNavButton";
import { useEffect, useState } from "react";

import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const CommentsSlider = ({ data }) => {
    const [fullData, setFullData] = useState([-1])
    useEffect(() => {
        setFullData(data)
    }, [data])
    return (
        <section className="w-full mx-auto lg:max-w-screen-lg p-4 bg-white shadow-md rounded-md">
            <div className="flex items-center gap-2 p-4">
                <HiOutlineChatBubbleLeftRight className="text-3xl text-neutral-500" />
                <h2 className="text-neutral-500 text-lg font-bold">نظرات کاربران</h2>
            </div>
            <div className="px-10 relative">
                {
                    fullData[0] === -1 ?
                        <div className="py-4">
                            <div className="w-full h-[148px] rounded-md bg-neutral-400 animate-pulse">
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
                                        slidesPerView: 1
                                    },
                                    600: {
                                        slidesPerView: 2
                                    },
                                    1024: {
                                        slidesPerView: 3
                                    },
                                    1280: {
                                        slidesPerView: 3
                                    },
                                }}
                            >
                                {fullData.map((d, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="shadow-[0_0_15px_#00000030] rounded-md p-4 w-full">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center justify-between">
                                                    <h2 className="text-rose-500 text-sm">{d.username}</h2>
                                                    <span className="text-xs text-neutral-500">{d.date}</span>
                                                </div>
                                                <p className="text-sm text-neutral-600">{d.comment}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <SlideNavButton />
                            </Swiper>
                }
            </div>
        </section>
    )
}

export default CommentsSlider