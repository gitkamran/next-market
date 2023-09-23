import { priceType } from "@/helper/pricetype";
import Image from "next/image";
import { HiMinusSmall, HiPlusSmall } from "react-icons/hi2";

const SingleSlider = ({ data }) => {
    return (
        <div className="w-full h-full rounded-md shadow-[0_0_5px_#00000030] bg-neutral-100 flex flex-col items-center gap-2 p-2">
            {
                data.saleOff !== 0 &&
                <div className="absolute top-5 left-1 bg-orange-500/90 rounded-full w-7 h-7 flex items-center justify-center">
                    <h2 className="text-white text-sm">%{Math.round(data.saleOff)}</h2>
                </div>
            }
            <div className="w-full h-auto bg-white flex items-center justify-center rounded-md">
                <Image
                    src={data.image}
                    alt={data.name}
                    width={97.5}
                    height={150}
                    priority
                    className="w-auto h-[150px] bg-transparent"
                />
            </div>
            <div className="flex items-center justify-center h-full">
                <h2 className="text-center text-neutral-600 text-xs font-bold line-clamp-2">{data.name}</h2>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center h-full">
                {data.saleOff !== 0 &&
                    <h2 className="text-center text-neutral-500 text-xs line-through">{priceType(data.price)} تومان</h2>
                }
                <h2 className="text-center text-green-600 text-sm">{priceType(data.main_price)} تومان</h2>
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-rose-500/90 rounded-md text-white text-xl p-1">
                    <HiPlusSmall />
                </button>
                <span>0</span>
                <button className="bg-rose-500/90 rounded-md text-white text-xl p-1">
                    <HiMinusSmall />
                </button>
            </div>
        </div>
    )
}

export default SingleSlider