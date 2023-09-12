import React from 'react'

const Recepcion = () => {
  return (
    <>
      <a-scene>
        <a-assets>
          <img id="entrada" rotation="0 -160 0"
          position="100 0 200" src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/2.JPG?v=1694332720052" alt="entrada" crossOrigin="anonymous" />
        </a-assets>

        <a-sky rotation="0 -80 0" id="entrada" src="#entrada"></a-sky>
      </a-scene>

    </>
  )
}

export default Recepcion