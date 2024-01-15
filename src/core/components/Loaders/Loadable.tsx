import { Suspense } from 'react'
import Loader from './Loader'

// project import

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: any) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
)

export default Loadable
