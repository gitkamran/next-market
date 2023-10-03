"use client"
import { useEffect, useState } from 'react'
import SingleSlider from '../single-slider/SingleSlider'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import axios from 'axios'

const Category = ({ url, setShowPopupProduct, setProductData, setShowError, subMenuId }) => {

    const [fullData, setFullData] = useState([-1])
    const [categoryId, setCategoryId] = useState(url.category ? url.category : "")
    const [paginate, setPaginate] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState(0)
    console.log(subMenuId)


    useEffect(() => {
        axios.get(`https://api.qazvinmarket.com/api/v1/cargo?parent_id=${subMenuId ? subMenuId : categoryId}&filter=${filter}&page=${page}`)
            .then(d => {
                setFullData(d.data.cargos)
                setPaginate(d.data.paginate)
            })
            .catch(e => {
                console.log("error")
            })
    }, [categoryId, page, filter, subMenuId])

    useEffect(() => {
        setPaginate([])
        setPage(1)
    }, [subMenuId])

    useEffect(() => {
        setCategoryId(url.category ? url.category : "")
        setPaginate([])
        setPage(1)
    }, [url.category])


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [categoryId, page]);

    return (
        <section className="w-full mx-auto lg:max-w-screen-lg p-4 bg-white shadow-md rounded-md">
            {fullData[0] === -1 ?
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
                        <div className='flex items-center justify-start gap-4'>
                            <h2 className='text-sm'>مرتب سازی بر اساس:</h2>
                            <button onClick={() => {
                                setFilter(0)
                            }}
                                className={`${filter === 0 && "text-rose-500/90"} text-sm`}
                            >حروف الفبا</button>
                            <button onClick={() => {
                                setFilter(2)
                            }}
                                className={`${filter === 2 && "text-rose-500/90"} text-sm`}
                            >گرانترین</button>
                            <button onClick={() => {
                                setFilter(1)
                            }}
                                className={`${filter === 1 && "text-rose-500/90"} text-sm`}
                            >ارزانترین</button>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                            {fullData.sort((a, b) => a.name - b.name).map((d, i) => (
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
                    </div>}
        </section>
    )
}

export default Category