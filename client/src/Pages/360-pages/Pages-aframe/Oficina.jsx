import React from 'react'

const Oficina = () => {
    return (
      <>
        <div>
          <a-scene>
            <a-assets>
              <img
                id="Oficina"
                src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/3.JPG?v=1694332725365"
                alt="Oficina"
                crossOrigin="anonymous"
              />
            </a-assets>
            <a-sky rotation="0 -80 0" id="Oficina" src="#Oficina"></a-sky>
          </a-scene>
        </div>
      </>
      );
}

export default Oficina