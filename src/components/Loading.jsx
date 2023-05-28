import { ColorRing } from 'react-loader-spinner'

import { useAppContext } from '../App'

const Loading = () => {
   const darkTheme  = useAppContext()
  return (
   <div className="flex justify-center items-center">
      <ColorRing
         visible={true}
         height={50}
         width={50}
         ariaLabel='blocks-loading'
         wrapperStyle={{  }}
         wrapperClass='blocks-wrapper'
         colors={darkTheme ? ['#390080', '#f47e60', '#f8b26a', '#abbd81', '#849b87'] : ['#390080', '#ffd700', '#f8e08e', '#ff6a13', '#2dccd3']}
      />
   </div>
  )
}
export default Loading