"use client"
import { useEffect, useState } from 'react'
import SingleSlider from '../single-slider/SingleSlider'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import axios from 'axios'
import SubMenuComp from '../sub-menu-comp/SubMenuComp'

const Category = ({ url, setShowPopupProduct, setProductData, setShowError, data, setSubMenuId, subMenuId, setPage, page }) => {

    const [fullData, setFullData] = useState([-1])
    const [categoryId, setCategoryId] = useState(url.category ? url.category : "")
    const [paginate, setPaginate] = useState([])

    useEffect(() => {
        axios.get(`https://api.qazvinmarket.com/api/v1/cargo?parent_id=${subMenuId !== 0 ? subMenuId : categoryId}&filter=0&page=${page}`)
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
    }, [url.category])


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [categoryId, page]);


    return (
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
                    <div className='w-full mx-auto lg:max-w-screen-lg bg-white rounded-md shadow-[0_0_10px_#00000050] p-2'>
                        {fullData[0] === -1 ?
                            <div className="bg-neutral-200 animate-pulse w-1/2 h-6 rounded-md"></div> :
                            fullData.lenght < 1 ?
                                <div>
                                    <h2>اطلاعات یافت نشد...</h2>
                                </div> :
                                <SubMenuComp
                                    data={data.filter(s => s.parent_id === +url.category)}
                                    setSubMenuId={setSubMenuId}
                                />
                        }
                    </div>
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
    )
}

export default Category