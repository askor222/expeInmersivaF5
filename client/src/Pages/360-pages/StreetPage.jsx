import React from 'react'
import Index360 from './Index360'

const StreetPage = () => {
  return (
    <>
        <Index360 />
        <iframe className='aframe-360' src="/Street" width="500" height="400" title='Street'>…</iframe>
        </>
  )
}

export default StreetPage