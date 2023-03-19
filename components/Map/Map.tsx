
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
})

export const Map = (props: MapPropTypes) => {
  return (<DynamicMap {...props} />)
}


export default Map;



