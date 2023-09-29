import React from 'react'
import Index360 from './Index360'

const IndexPage = () => {
    return (
        <>
          <Index360 />
          <iframe className='aframe-360' src="/recepcion" width="500" height="400" title='recepcion'>…</iframe>        
          </>
    )
}

export default IndexPage
