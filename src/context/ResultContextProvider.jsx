import { createContext, useState, useContext } from "react";
import { PropTypes } from 'prop-types'

const ResultContext = createContext()
const baseUrl = 'https://google-search72.p.rapidapi.com/search'

const ResultContextProvider = ({ children }) => {
   const [results, setResult] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [searchTerm, setSearchTerm] = useState('')


   const getResults = async (type) => {
      setIsLoading(true)

      const response = await fetch(`${baseUrl}${type}`, {
         method: 'GET',
         headers: {
            'X-User-Agent': 'desktop',
            'X-RapidAPI-Key': 'a736c61c50msha24923036048b10p16f00cjsna1126f36912d',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
         }
      })

      const data = await response.json()

      setResult(data)
      setIsLoading(false)
   }

   return (
      <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
         {children}
      </ResultContext.Provider>
   );
}
const useResultContext = () => useContext(ResultContext)

export  { ResultContextProvider, useResultContext }

ResultContextProvider.propTypes = {
   children: PropTypes.element
}