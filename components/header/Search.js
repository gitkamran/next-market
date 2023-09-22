import {HiOutlineSearch} from "react-icons/hi"

const Search = () => {
  return (
    <form className="relative w-full">
        <input className="w-full shadow-md rounded-md bg-neutral-100 p-2 focus:outline-none" placeholder="دنبال چی می گردی؟" />
        <button className="absolute top-1/2 -translate-y-1/2 left-2">
            <HiOutlineSearch className="text-neutral-500 text-2xl" />
        </button>
    </form>
  )
}

export default Search