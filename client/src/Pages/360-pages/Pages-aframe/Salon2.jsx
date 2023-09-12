import React from 'react'

const Salon2 = () => {
  return (
    <body>


    <a-scene>
        <a-assets>
            <img id="salon2" src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/6.JPG?v=1694332739059" alt="Salón 2" crossOrigin="anonymous" />
        </a-assets>


        <a-sky rotation="0 -50 0" id="salon2" src="#salon2"></a-sky>
    </a-scene>

</body>
  )
}

export default Salon2