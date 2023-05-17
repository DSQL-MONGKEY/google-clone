import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"

import { Search } from "./Search"

export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap justify-center sm:justify-between items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900 ">
            Noodle
          </p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-500 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? 'Light' : 'Dark'}
        </button>
      </div>
      <Search/>
    </div>
  )
}

Navbar.propTypes = {
  darkTheme: PropTypes.any,
  setDarkTheme: PropTypes.func,
}