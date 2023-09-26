"use client"
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi"

const Search = () => {
  const router = useRouter();
  const searchRef = useRef();
  const shopSearcher = (e) => {
    e.preventDefault();
    if (searchRef.current.value.length > 0) {
      router.push(`/?search=${searchRef.current.value}`)
      searchRef.current.value = ""
    }
  }
  return (
    <form onSubmit={shopSearcher} className="relative w-full">
      <input
        className="w-full shadow-md rounded-md bg-neutral-100 p-2 focus:outline-none"
        placeholder="دنبال چی می گردی؟"
        ref={searchRef}
        type="search"
      />
      <button className="absolute top-1/2 -translate-y-1/2 left-2">
        <HiOutlineSearch className="text-neutral-500 text-2xl" />
      </button>
    </form>
  )
}

export default Search