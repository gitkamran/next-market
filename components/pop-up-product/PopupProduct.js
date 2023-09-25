"use client"
import { useAppContext } from '@/context/appContext/AppContext'
import { priceType } from '@/helper/pricetype'
import Image from 'next/image'
import React, { useState } from 'react'
import { HiOutlineHeart } from 'react-icons/hi'
import { HiMinusSmall, HiOutlineListBullet, HiPlusSmall } from 'react-icons/hi2'

const PopupProduct = ({ setShowPopupProduct, productData, setProductData, setShowError }) => {
    const { cartNumber, setCartNumber, countNumber, setCountNumber } = useAppContext();
    // const [countNumber, setCountNumber] = useState(0);
    const showErrorHandler = () => {
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
        }, 2000);
    }

    const closePopup = () => {
        setShowPopupProduct(false);
        setProductData("")
    }
    return (
        <>
            <div onClick={closePopup} className='fixed inset-0 bg-white/70 z-40'>
            </div>
            <div className='fixed z-50 flex items-center justify-center'>
                <div className='relative rounded-md shadow-[0_0_10px_#33333350] px-8 py-12 bg-white z-50 max-w-md'>
                    {
                        productData.saleOff !== 0 &&
                        <div className="absolute top-2 left-2 bg-orange-500/90 rounded-full w-7 h-7 flex items-center justify-center">
                            <h2 className="text-white text-sm">%{Math.round(productData.saleOff)}</h2>
                        </div>
                    }
                    <div className='flex flex-col gap-8 items-center justify-center w-full h-full'>
                        <div className='flex items-stretch justify-between gap-2 w-full h-full'>
                            <div className='basis-1/2 flex items-center justify-center w-1/2'>
                                <Image
                                    src={productData.image}
                                    alt={productData.name}
                                    width={131}
                                    height={200}
                                    priority
                                    className="w-auto h-[200px] bg-transparent"
                                />
                            </div>
                            <div className='flex flex-col items-start gap-3 basis-1/2 w-1/2'>
                                <h2 className="text-neutral-600 text-sm font-bold text-right">{productData.name}</h2>
                                <div className="flex flex-col gap-1 items-center justify-center h-full">
                                    {productData.saleOff !== 0 &&
                                        <h2 className="text-center text-neutral-500 text-sm line-through">{priceType(productData.price)} تومان</h2>
                                    }
                                    <h2 className="text-center text-green-600">{priceType(productData.main_price)} تومان</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => productData.max_count > countNumber ? [setCountNumber(countNumber + 1), setCartNumber(cartNumber + 1)] : showErrorHandler()} className="bg-rose-500/90 rounded-md text-white text-xl p-1">
                                        <HiPlusSmall />
                                    </button>
                                    <span className="text-neutral-600 text-lg font-bold w-4 flex items-center justify-center">
                                        {countNumber}
                                    </span>
                                    <button onClick={() => countNumber > 0 && [setCountNumber(countNumber - 1), setCartNumber(cartNumber - 1)]} className="bg-rose-500/90 rounded-md text-white text-xl p-1">
                                        <HiMinusSmall />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-rose-500/90 text-sm outline outline-1 outline-rose-500/90 p-2 rounded-md flex items-center gap-1'>
                                <HiOutlineHeart className='text-xl' />
                                افزودن به علاقه مندی
                            </button>
                            <button onClick={closePopup} className='text-neutral-500/90 text-sm outline outline-1 outline-neutral-500/90 p-2 rounded-md flex items-center gap-1'>
                                <HiOutlineListBullet className='text-xl' />
                                بازگشت به محصولات
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupProduct