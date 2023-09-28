import React from 'react'

const SubMenuComp = ({ data }) => {
    console.log(data)
    return (
        <div className='w-full mx-auto lg:max-w-screen-lg bg-white rounded-md shadow-[0_0_10px_#00000050] p-2'>
            {/* {data.map((d, i) => (
                <div key={i} className='flex items-center gap-4'>
                    <h2>{d.name}</h2>
                </div>
            ))} */}
        </div>
    )
}

export default SubMenuComp