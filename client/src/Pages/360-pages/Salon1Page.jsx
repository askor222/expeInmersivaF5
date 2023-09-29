import React from 'react'
import Index360 from './Index360'

const Salon1Page = () => {
    return (
        <>
          <Index360 />
          <iframe className='aframe-360' src="/salon1" width="500" height="400" title='salon1'>…</iframe>
        </>
    )
}

export default Salon1Page