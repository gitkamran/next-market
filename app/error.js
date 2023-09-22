"use client"

const Error = () => {
    return (
        <main className="flex items-center justify-center w-full min-h-screen">
            <div className='flex flex-col items-center gap-8'>
                <h2 className="text-lg text-neutral-500">بارگذاری با خطا مواجه شد!</h2>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-500 text-white p-2 rounded-md shadow-md"
                >
                    دوباره امتحان کنید
                </button>
            </div>
        </main>
    )
}

export default Error