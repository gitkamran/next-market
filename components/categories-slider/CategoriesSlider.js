"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./cetegories-slider.css";
import SlideNavButton from "./SlideNavButton";
import { useEffect, useState } from "react";
import Image from "next/image";

const CategoriesSlider = ({ data }) => {
    const [fullData, setFullData] = useState([-1])
    useEffect(() => {
        setFullData(data)
    }, [data])
    return (
        <section className="relative w-full mx-auto lg:max-w-screen-lg p-4 bg-white shadow-md rounded-md">
            <div className="px-10">
                {
                    fullData[0] === -1 ?
                        <div className="py-4">
                            <div className="w-full h-[120px] xl:h-[140px] rounded-md bg-neutral-400 animate-pulse">
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
                                        slidesPerView: 4
                                    },
                                    600: {
                                        slidesPerView: 6
                                    },
                                    1024: {
                                        slidesPerView: 7
                                    },
                                    1280: {
                                        slidesPerView: 8
                                    },
                                }}
                            >
                                {fullData.map((d, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="w-full rounded-md shadow-[0_0_15px_#00000030] flex flex-col items-center gap-2 px-1 py-2">
                                            <div className="w-14 h-14">
                                                <Image
                                                    src={d.image}
                                                    alt={d.name}
                                                    width={80}
                                                    height={80}
                                                    priority
                                                    className="w-auto h-auto"
                                                />
                                            </div>
                                            <div className="flex items-center justify-center h-full">
                                                <h2 className="text-center text-neutral-600 text-sm">{d.name}</h2>
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

export default CategoriesSlider