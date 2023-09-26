"use client"
import { useEffect, useState } from 'react'
import SingleSlider from '../single-slider/SingleSlider'

const Search = ({ data, setShowPopupProduct, setProductData, setShowError }) => {

    const [searchData, setSearchData] = useState([-1])
    useEffect(() => {
        setSearchData(data)
    }, [data])
    console.log(searchData)


    return (
        searchData[0] === -1 ?
            <div className="py-4">
                <div className="w-full h-[290px] rounded-md bg-neutral-400 animate-pulse">
                </div>
            </div>
            :
            searchData.length < 1 ?
                <h2>اطلاعات یافت نشد!</h2> :
                <div className='mx-auto lg:max-w-screen-lg p-4 bg-white shadow-md rounded-md'>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                        {searchData.map((d, i) => (
                            <SingleSlider
                                key={i}
                                data={d}
                                setShowPopupProduct={setShowPopupProduct}
                                setProductData={setProductData}
                                setShowError={setShowError}
                            />
                        ))}
                    </div>
                </div>
    )
}

export default Search