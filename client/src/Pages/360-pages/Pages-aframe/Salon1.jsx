import React from 'react'

const Salon1 = () => {
    return (
        <body>


            <a-scene>
                <a-assets>
                    <img id="salon1" src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/5.JPG?v=1694332735225" alt="Salón 1" crossOrigin="anonymous" />
                </a-assets>


                <a-sky rotation="0 -80 0" id="salon1" src="#salon1"></a-sky>
            </a-scene>

        </body>
    )
}

export default Salon1