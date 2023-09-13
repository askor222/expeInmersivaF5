import React from 'react'

const Street = () => {
  return (
<body>
    <a-entity camera position="0 0 0" wasd-controls="" rotation="0 260 0" look-controls="" aframe-injected="" data-aframe-inspector-original-camera=""></a-entity>
    
    <a-scene>
        <a-assets>
            <img id="street" src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/1.JPG?v=1694332717226"
                alt="street" crossOrigin="anonymous" />
        </a-assets>

            <a-sky rotation="0 -160 0" position="100 0 200" id="street" src="#street"></a-sky>
    </a-scene>

</body>
  )
}

export default Street