import { PropTypes } from 'prop-types'
import { ColorRing } from 'react-loader-spinner'


const Loading = ({darkTheme, setDarkTheme}) => {
  return (
   <div className="flex justify-center items-center">
      <ColorRing
         visible={true}
         height={50}
         width={50}
         ariaLabel='blocks-loading'
         wrapperStyle={{  }}
         wrapperClass='blocks-wrapper'
         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
   </div>
  )
}
export default Loading

Loading.propTypes = {
   darkTheme: PropTypes.any,
   setDarkTheme: PropTypes.func
}