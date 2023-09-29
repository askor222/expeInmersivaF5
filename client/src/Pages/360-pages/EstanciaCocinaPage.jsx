import React from 'react'
import Index360 from './Index360'

const EstanciaCocinaPage = () => {
    return (
        <>
          <Index360 />
          <iframe className='aframe-360' src="/EstanciaCocina" width="500" height="400" title='cocina' >…</iframe>
        </>
      )
}

export default EstanciaCocinaPage