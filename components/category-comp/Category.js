"use client"
import { useEffect, useState } from 'react'
import SingleSlider from '../single-slider/SingleSlider'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import axios from 'axios'

const Category = ({ url, setShowPopupProduct, setProductData, setShowError, subMenuId }) => {

    const [fullData, setFullData] = useState([-1])
    const [categoryId, setCategoryId] = useState(url.category ? url.category : "")
    const [page, setPage] = useState(1)
    const [paginate, setPaginate] = useState([])


    useEffect(() => {
        axios.get(`https://api.qazvinmarket.com/api/v1/cargo?parent_id=${subMenuId ? subMenuId : categoryId}&filter=0&page=${page}`)
            .then(d => {
                setFullData(d.data.cargos)
                setPaginate(d.data.paginate)
            })
            .catch(e => {
                console.log("error")
            })
    }, [categoryId, page, subMenuId])

    useEffect(() => {
        setCategoryId(url.category ? url.category : "")
        setPage(1)
    }, [url.category, subMenuId])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [categoryId, page, subMenuId]);


    return (
        <div className='flex flex-col gap-4 w-full mx-auto lg:max-w-screen-lg bg-white rounded-md shadow-[0_0_10px_#00000050] p-4'>
            {
                fullData[0] === -1 ?
                    <div className='flex flex-col items-center gap-10 py-16'>
                        <h2 className='text-neutral-400 text-lg'>در حال جستجو نتایج...</h2>
                        <HiMagnifyingGlass className='text-5xl text-neutral-400 animate-pulse' />
                    </div>
                    :
                    fullData.length < 1 ?
                        <div className='flex flex-col items-center gap-10 py-16'>
                            <h2 className='text-neutral-400 text-lg'>نتیجه ای یافت نشد...</h2>
                            <HiOutlineEmojiSad className='text-5xl text-neutral-400' />
                        </div>
                        :
                        <div className='flex flex-col gap-4'>
                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                                {fullData.map((d, i) => (
                                    <SingleSlider
                                        key={i}
                                        data={d}
                                        setShowPopupProduct={setShowPopupProduct}
                                        setProductData={setProductData}
                                        setShowError={setShowError}
                                    />
                                ))}
                            </div>
                            <div className='flex items-center gap-1'>
                                {paginate.current > 1 &&
                                    <button onClick={() => setPage(paginate.current - 1)} className='bg-rose-500/90 text-white p-2 rounded-md'>قبلی</button>

                                }
                                {paginate.last_page > 1 && paginate.current < paginate.last_page &&
                                    <button onClick={() => setPage(paginate.current + 1)} className='bg-rose-500/90 text-white p-2 rounded-md'>بعدی</button>

                                }
                            </div>
                        </div>
            }
        </div>
    )
}

export default Category