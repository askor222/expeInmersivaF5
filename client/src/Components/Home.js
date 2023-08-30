import React from 'react'

const Home = () => {
    return (
        <div>

            <a-scene>
                <a-assets>
                    <a-asset-item id="General" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/Oficina10.glb?v=1693378684016"></a-asset-item>
                </a-assets>


                <a-camera id="camera1" far="10000" camera="" position="0.08716 22 0" rotation="6.302535746439053 27.043607930174847 0"
                    look-controls="" wasd-controls="" data-aframe-inspector-original-camera="">
                    <a-cursor position="0 4 0" material="" cursor="" geometry="" raycaster="objects: [data-raycastable]"></a-cursor>
                </a-camera>
                <a-entity src="#General" static-body raycaster="objects: .collidable" position="0 -34.7561 0" gltf-model="#General"></a-entity>

                <a-plane id="sueloPrueba" color="white" position="8.104 -16.73558 -7.009" rotation="90 360 360" material="side: double; displacementTextureRepeat: 1.02 1" geometry="" scale="1000 1000 10"></a-plane>

                <a-entity id="Salon1ConVentanas" collider-check> </a-entity>


                <a-sky color="lightblue"></a-sky>
            </a-scene>
        </div>
    )
}

export default Home