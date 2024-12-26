"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
const SearchInput = () => {
  const [keyword, setKeyword] = useState<string>('')
  const router = useRouter()
  return (
    <form>
      <input type="text" placeholder='Search' value={keyword} className="text-sm px-2 py-1 outline-none border border-black"
       onChange={(e) => setKeyword(e.target.value)}/>
       <button type="submit">
        <BiSearch className="text-black text-xl" onClick={() => router.push(`/search/${keyword}`)}/>
       </button>
    </form>
  )
}

export default SearchInput