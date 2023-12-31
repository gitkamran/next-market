"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const CategoriesSlider = ({ data, url, setSubMenuId }) => {

    const router = useRouter();
    const [fullData, setFullData] = useState([-1]);
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

    const shopCategory = (input) => {
        router.push(`/?category=${input}`)
    }
    return (
        <section className="w-full mx-auto lg:max-w-screen-lg p-4 bg-white shadow-md rounded-md">
            {
                fullData[0] === -1 ?
                    <div className="py-4">
                        <div className="w-full h-[120px] xl:h-[140px] rounded-md bg-neutral-400 animate-pulse">
                        </div>
                    </div>
                    :
                    fullData.length < 1 ?
                        <h2>اطلاعات یافت نشد!</h2> :
                        <>
                            <div className="relative px-10">
                                {!isFirst && <button onClick={handlePrev} className={`z-20 absolute top-1/2 -translate-y-1/2 right-0`}>
                                    <HiChevronRight className="text-rose-500/90 text-2xl md:text-3xl" />
                                </button>}

                                {!isLast && <button onClick={handleNext} className={`z-20 absolute top-1/2 -translate-y-1/2 left-0`}>
                                    <HiChevronLeft className="text-rose-500/90 text-2xl md:text-3xl" />
                                </button>}
                                <Swiper
                                    spaceBetween={16}
                                    ref={slideRef}
                                    onSlideChange={onSlideChange}
                                    navigation={false}
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
                                            <div
                                                onClick={() => {
                                                    shopCategory(d.id);
                                                    setSubMenuId("")
                                                }}
                                                className={`${+url.category === d.id ? "shadow-[0_0_15px_#F43F5E90]" : "shadow-[0_0_15px_#00000030]"} cursor-pointer w-full rounded-md flex flex-col items-center gap-2 px-1 py-2`}>
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
                                </Swiper>
                            </div>

                        </>
            }
        </section>
    )
}

export default CategoriesSlider