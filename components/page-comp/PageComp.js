"use client"
import CategoriesSlider from '../categories-slider/CategoriesSlider'
import Amazing from '../amazing-products/Amazing'
import Banners from '../banners/Banners'
import Newest from '../newest-products/Newest'
import CommentsSlider from '../comments-slider/CommentsSlider'
import PopupProduct from '../pop-up-product/PopupProduct'
import { useState } from 'react'
import "./custom.css"
import Search from '../search-comp/Search'
import Category from '../category-comp/Category'
import SubMenuComp from '../sub-menu-comp/SubMenuComp'

const PageComp = ({ data, url }) => {
    const [showPopupProduct, setShowPopupProduct] = useState(false)
    const [productData, setProductData] = useState("")
    const [showError, setShowError] = useState(false);

    return (
        <main className="flex flex-col gap-4 items-center w-full min-h-screen bg-neutral-200/50 py-4">
            <CategoriesSlider
                data={data.dataMenu.menus}
                url={url}
            />
            {
                url.category &&
                <SubMenuComp />
            }
            {
                url.search ?
                    <Search
                        url={url}
                        setShowPopupProduct={setShowPopupProduct}
                        setProductData={setProductData}
                        setShowError={setShowError}
                    />
                    :
                    url.category ?
                        <Category
                            url={url}
                            setShowPopupProduct={setShowPopupProduct}
                            setProductData={setProductData}
                            setShowError={setShowError}
                        />
                        :
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