import { NavLink } from "react-router-dom"

const links = [
   {
      url: '/search',
      text: 'All',
   },
   {
      url: '/imagesearch',
      text: 'images'
   }
]

export const Link = () => {
  return (
      <div className="flex justify-center mt-4">
         {links.map( ( { url, text }, index ) => (
            <NavLink key={index} to={url} className="mx-3 back px-3 py-1 dark:bg-slate-500 bg-slate-200 border-slate-300 my-5 rounded-[13px]"    activeclassname="text-blue-700  border-b-2 dark:text-blue-300 m-5">
               {text}
            </NavLink>
         ))}
      </div>
  )
}
