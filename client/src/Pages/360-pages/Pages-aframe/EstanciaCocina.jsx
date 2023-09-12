import React from 'react'

const EstanciaCocina = () => {
  return (
    <body>
    <a-scene>
        <a-assets>
            <img id="EspacioComedor" src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/4.JPG?v=1694333249392" alt="EspacioComedor" crossOrigin="anonymous" />
        </a-assets>


        <a-sky rotation="0 180 0" id="EspacioComedor" src="#EspacioComedor"></a-sky>
    </a-scene>

</body>
  )
}

export default EstanciaCocina