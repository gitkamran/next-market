"use client"
import CategoriesSlider from '../categories-slider/CategoriesSlider'
import Amazing from '../amazing-products/Amazing'
import Banners from '../banners/Banners'
import Newest from '../newest-products/Newest'
import CommentsSlider from '../comments-slider/CommentsSlider'
import PopupProduct from '../pop-up-product/PopupProduct'
import { useEffect, useState } from 'react'
import "./custom.css"
import Search from '../search-comp/Search'
import Category from '../category-comp/Category'
import axios from 'axios'

const PageComp = ({ data, url }) => {
    const [showPopupProduct, setShowPopupProduct] = useState(false)
    const [productData, setProductData] = useState("")
    const [showError, setShowError] = useState(false);
    const [subMenuId, setSubMenuId] = useState("")

    return (
        <main className="flex flex-col gap-4 items-center w-full min-h-screen bg-neutral-200/50 py-4">
            <CategoriesSlider
                data={data.dataMenu.menus}
                url={url}
                setSubMenuId={setSubMenuId}
            />
            {
                url.category &&
                <div className='w-full mx-auto lg:max-w-screen-lg bg-white rounded-md shadow-[0_0_10px_#00000050] p-2'>
                    {data.dataMenu.menus.map((d, i) => (
                        <div key={i}>
                            {d.id === +url.category &&
                                <div className='flex items-center gap-2'>
                                    <h2 onClick={() => setSubMenuId(d.id)} className={`${subMenuId === "" || subMenuId === d.id ? "bg-rose-500/90 text-white rounded-md" : ""} cursor-pointer text-sm p-1.5`}>همه</h2>
                                    {d.subMenus.map((s, i) => (
                                        <h2 key={i} className={`${s.id === subMenuId ? "bg-rose-500/90 text-white rounded-md" : ""} cursor-pointer text-sm p-1.5`} onClick={() => setSubMenuId(s.id)}>{s.name}</h2>
                                    ))}
                                </div>
                            }
                        </div>
                    ))}
                </div>
            }
            {url.category &&
                <Category
                    url={url}
                    setShowPopupProduct={setShowPopupProduct}
                    setProductData={setProductData}
                    setShowError={setShowError}
                    subMenuId={subMenuId}
                />
            }
            {
                url.search &&
                <Search
                    setShowPopupProduct={setShowPopupProduct}
                    setProductData={setProductData}
                    setShowError={setShowError}
                    subMenuId={subMenuId}
                />
            }
            {!url.category && !url.search &&
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
            {
                showPopupProduct &&
                <PopupProduct
                    setShowPopupProduct={setShowPopupProduct}
                    productData={productData}
                    setProductData={setProductData}
                    setShowError={setShowError}
                />
            }

            {
                showError &&
                <div className='fixed top-5 right-5 z-50 flex items-center justify-center p-2 bg-rose-500 rounded-md shadow-[0_0_10px_#f43f5e]'>
                    <h2 className='text-white text-sm'>موجودی کالا کافی نیست</h2>
                </div>
            }
        </main >
    )
}

export default PageComp