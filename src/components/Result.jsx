import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ReactPlayer from "react-player"

import  { useResultContext }  from "../context/ResultContextProvider"
import Loading from "./Loading"

export const Result = () => {
   const { result, isLoading, getResults, searchTerm } = useResultContext()
   const location = useLocation()

   useEffect(() => {
      getResults('Youtube')
   },[])

   if(isLoading) return <Loading/>
   console.log(location.pathname)

   switch(location.pathname) {
      case '/search' :
         return (
            <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
               {/* {result?.result?.map((link, title) => (
                  
               ))} */}
            </div>
         )
      case '/images' :
         return (
            <div>

            </div>
         )
      case '/news' :
         return 'news'
      case 'videos' :
         return 'videos'
      default:
         return 'error'
   }
}
