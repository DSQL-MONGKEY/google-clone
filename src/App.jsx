/* eslint-disable no-unused-vars */
import React, { useState} from 'react'

import { Navbar } from './components/Navbar'
import { DomRoutes } from './components/DomRoutes'
import { Footer } from './components/Footer'


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen font-poppins">
        <Navbar 
          darkTheme={darkTheme} 
          setDarkTheme={setDarkTheme} />
        <DomRoutes/>
        <Footer/>
      </div>
    </div>
  )
}
export default App