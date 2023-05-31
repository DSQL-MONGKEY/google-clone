import { ColorRing } from 'react-loader-spinner'


const Loading = () => {
  return (
   <div className="flex justify-center items-center">
      <ColorRing
         visible={true}
         height={50}
         width={50}
         ariaLabel='blocks-loading'
         wrapperStyle={{  }}
         wrapperClass='blocks-wrapper'
         colors={['#390080', '#ffd700', '#f8e08e', '#ff6a13', '#2dccd3']}
         />
   </div>
  )
}
export default Loading