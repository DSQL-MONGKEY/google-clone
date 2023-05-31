import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ReactPlayer from "react-player"

import  { useResultContext }  from "../context/ResultContextProvider"
import Loading from "./Loading"

export const Result = () => {
   const { results, isLoading, getResults, searchTerm } = useResultContext()
   const location = useLocation()

   useEffect(() => {
      if(searchTerm) {
         if(location.pathname === '/imagesearch') {
            getResults(`/imagesearch?q=${searchTerm}`)
         } else {
            getResults(`${location.pathname}?q=${searchTerm}`)
         }
      }
      console.log(location.pathname)
   },[])

   if(isLoading) return <Loading/>

   switch(location.pathname) {
      case '/search' : 
         return (
            <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
               {results?.items?.map(({link, title}, index) => (
                  <div key={index} className="md:w-2/5 w-full">
                     <a href={link} target="_blank" rel="noreferrer">
                        <p className="text-sm">
                           {link.lenght > 30 ? link.substring(0, 30) : link}
                        </p>
                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                           {title}
                        </p>
                     </a>
                  </div>
               ))}
            </div>
         )
      case '/imagesearch' :
         return (
            <div className="flex flex-wrap justify-center items-center ">
               {results?.items?.map(({ originalImageUrl, thumbnailImageUrl, contextLink, title,index }) => (
                  <a key={index} href={contextLink} className="sm:p-3 p-5" target="_blank" rel="noreferrer">
                     <img src={originalImageUrl } alt={title} loading="lazy" width={200} height={200}/>
                     <p className="w-36 break-words text-sm mt-2">
                        {title}
                     </p>
                  </a>
               ))}
            </div>
         )
      default:
         return 'error'
   }
}
