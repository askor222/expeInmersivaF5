import React from 'react'

const Inmersive = () => {
  return (
    <div>

<a-scene>
        <a-assets>
          {/* <!-- <a-asset-item id="Salon1ConVentanas" src="https://cdn.glitch.global/23cd5e74-01aa-459b-a8e9-7e365f343eac/OficinaGeneral8.1.glb?v=1693238054010"></a-asset-item> -->
            <!-- <a-asset-item id="Salon1ConVentanas" src="https://cdn.glitch.global/ad4a9a20-adce-40d5-917e-275b16b65d45/OfinicaFactoriaGlobal5tama%C3%B1o.glb?v=1693072331118"></a-asset-item> -->
            <!-- <a-asset-item id="General" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/Oficinaventanas12.glb?v=1693321571039"></a-asset-item> --> */}
          <a-asset-item id="General" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/Oficina10.glb?v=1693378684016"></a-asset-item>

        </a-assets>

        <a-entity light="intensity: 0.6; castShadow: true" position="48.39988 65.39308 1" data-aframe-default-light="" aframe-injected=""></a-entity>
        {/* <!-- <a-light id="luz 1" type="point" color="white" position="-0.786 95.77771 77.74846" light="color: #f3f2ec"></a-light>         -->
        <!-- <a-light id="luz 2" type="point" color="white" position="55.08244 133.63435 -79.61394" light="color: #f3f2ec"></a-light>
        <a-light id="luz 3" type="point" color="white" position="72.45906 81.72083 167.16657" light="color: #f3f2ec"></a-light>        
         -->
        <!-- <a-camera id="cameraAerea" camera="" position="0 100 0" rotation="-5.271000000000001 102.789 0" look-controls="" wasd-controls="" data-aframe-inspector-original-camera="">
        <a-cursor material="" raycaster="" cursor="" geometry=""></a-cursor>
       </a-camera> --> */}

        <a-camera id="camera1" far="10000" camera="" position="0.08716 22 0" rotation="6.302535746439053 27.043607930174847 0"
          look-controls="" wasd-controls="" data-aframe-inspector-original-camera="">
          <a-cursor position="0 4 0" material="" cursor="" geometry="" raycaster="objects: [data-raycastable]"></a-cursor>
        </a-camera>
        <a-entity src="#Salon1ConVentanas" static-body raycaster="objects: .collidable" position="0 -34.7561 0" gltf-model="#Salon1ConVentanas"></a-entity>
        <a-entity src="#General" static-body raycaster="objects: .collidable" position="0 -34.7561 0" gltf-model="#General"></a-entity>


        <a-plane id="sueloPrueba" color="white" position="8.104 -16.73558 -7.009" rotation="90 360 360" material="side: double; displacementTextureRepeat: 1.02 1" geometry="" scale="1000 1000 10"></a-plane>

        <a-entity id="Salon1ConVentanas" collider-check></a-entity>


        <a-sky color="lightblue"></a-sky>
      </a-scene>

    </div>
  )
}

export default Inmersive