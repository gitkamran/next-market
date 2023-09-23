"use client"

import Image from "next/image"

const Loading = () => {
    return (
        <main className="flex items-center justify-center w-full min-h-screen">
            <Image
                src="/assets/images/loader/loader.svg"
                width={24}
                height={24}
                priority
                alt="در حال بارگذاری اطلاعات"
            />
        </main>
    )
}

export default Loading