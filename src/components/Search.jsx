import { useState, useEffect } from "react"
import { useDebounce } from "use-debounce"

import {Link} from "./Link"
import { useResultContext } from "../context/ResultContextProvider"

export const Search = () => {
   const [text, setText] = useState('')
   const { setSearchTerm } = useResultContext()
   const [debouncedValue] = useDebounce(text, 300)

   useEffect(() => {
      if (debouncedValue) setSearchTerm(debouncedValue)
   }, [])

   return (
      <div className="sm:mt-10 mt-3 w-full flex flex-col justify-center items-center">
         <input
            value={text}
            type="text" 
            name="search" 
            id="search" 
            placeholder="Search"
            onChange={(e) => setText(e.target.value)}
            className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm focus:bg-gray-200 outline-none p-6 text-black hover:shadow-lg"
         />
         {text && (
            <button 
               type="button" 
               className="button top-1.5 right-4 text-2xl text-gray-500"
               onClick={() => setText('')}
            >
               X
            </button>
         )}
         <Link/>
      </div>
   )
}
