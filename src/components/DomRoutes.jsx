import { Routes, Route} from "react-router-dom"

import { Result } from "./Result"
import { Search } from "./Search"

export const DomRoutes = () => {
  return (
    <div className="p-4 ">
      <Routes>
        <Route 
          path="/" 
          element={<Search/>} 
        />          
        <Route 
          path="/search"
          element={<Result/>} 
        />
        <Route
          path="/images"
          element={<Result/>}
        />
        <Route
          path="/news"
          element={<Result/>}
        />
        <Route
          path="/videos"
          element={<Result/>}
        />
      </Routes>
    </div>
  )
}
