"use client"
import CategoriesSlider from '../categories-slider/CategoriesSlider'
import Amazing from '../amazing-products/Amazing'
import Banners from '../banners/Banners'
import Newest from '../newest-products/Newest'
import CommentsSlider from '../comments-slider/CommentsSlider'
import PopupProduct from '../pop-up-product/PopupProduct'
import { useEffect, useState } from 'react'
import "./custom.css"
import axios from 'axios'
import Search from '../search-comp/Search'

const PageComp = ({ data, url }) => {
    const [showPopupProduct, setShowPopupProduct] = useState(false)
    const [productData, setProductData] = useState("")
    const [showError, setShowError] = useState(false);
    const [fullData, setFullData] = useState([-1])
    const [search, setSearch] = useState(url.search ? `search=${url.search}` : "")

    useEffect(() => {
        axios.get(`https://api.qazvinmarket.com/api/v1/search?q=${search}&page=1`)
            .then(d => {
                setFullData(d.data.cargos)
            })
            .catch(e => {
                console.log("error")
            })
    }, [search])
    useEffect(() => {
        setSearch(url.search ? `search=${url.search}` : "")
    }, [url.search])
    return (
        <main className="flex flex-col gap-4 items-center w-full min-h-screen bg-neutral-200/50 py-4">
            <CategoriesSlider data={data.dataMenu.menus} />

            {
                search ?
                    fullData[0] === -1 ?
                        <h2>در حال بارگذاری اطلاعات...</h2> :
                        fullData.length < 1 ?
                            <h2>نتیجه ای یافت نشد...</h2> :
                            <Search
                                data={fullData}
                                setShowPopupProduct={setShowPopupProduct}
                                setProductData={setProductData}
                                setShowError={setShowError}
                            /> :
                    <>
                        <Amazing
                            data={data.dataIndex.data.amazing}
                            setShowPopupProduct={setShowPopupProduct}
                            setProductData={setProductData}
                            setShowError={setShowError}
                        />

                        <Banners
                            data={data.dataIndex.data.advertises}
                        />

                        <Newest
                            data={data.dataIndex.data.newest}
                            setShowPopupProduct={setShowPopupProduct}
                            setProductData={setProductData}
                            setShowError={setShowError}
                        />

                        <CommentsSlider
                            data={data.dataComment.comments}
                        />
                    </>
            }
            {showPopupProduct &&
                <PopupProduct
                    setShowPopupProduct={setShowPopupProduct}
                    productData={productData}
                    setProductData={setProductData}
                    setShowError={setShowError}
                />
            }

            {showError &&
                <div className='fixed top-5 right-5 z-50 flex items-center justify-center p-2 bg-rose-500 rounded-md shadow-[0_0_10px_#f43f5e]'>
                    <h2 className='text-white text-sm'>موجودی کالا کافی نیست</h2>
                </div>
            }
        </main>
    )
}

export default PageComp