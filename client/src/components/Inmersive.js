import React from 'react'

const Inmersive = () => {
  return (
    <div>
      
      <a-scene>

{/* Default lighting injected by A-Frame */}
<a-entity light="type: ambient; color: #BBB"></a-entity>
<a-entity light="type: directional; color: #FFF; intensity: 0.6" position="-0.5 1 1"></a-entity>

 
{/* ground & walls & ceiling */}
<a-entity position="0 0 0">
    <a-entity id="walls" position="0 7.245 0"
        gltf-model="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/Oficina10.glb?v=1693381953265">
    </a-entity>
  
    <a-entity id="ground" position="-199.308 3.629 230.262" scale="21 10 27.500"
        gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/floor_whitetile_20x20_meters.glb?v=1692870723480">
      </a-entity>
    
    <a-entity id="ceiling" position="-199.928 106.298 233.193" scale="21 100 27.500"
        gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/floor_whitetile_20x20_meters.glb?v=1692870723480">
    </a-entity>

</a-entity>

{/* sidewalk & flowers */}
<a-entity position="0 0 0">
  <a-entity id="sidewalkright" position="237.867 0.026 -15.488" scale="0.285 0.200 0.200" rotation="0 90 0"
    gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/sidewalk_mm1.glb?v=1693303827295">
  </a-entity>

  <a-entity id="sidewalkleft" position="8.619 -0.913 281.197" scale="0.285 0.200 0.200"
    gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/sidewalk_mm1.glb?v=1693303827295">
  </a-entity>

  <a-entity id="cylinderone" position="282.606 7.817 310.944" scale="90 90 90" rotation="90 0 0"
    gltf-model="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/concrete_test_cylinder_w1_1.glb?v=1693308727583">
  </a-entity>

  <a-entity id="cylindertwo" position="217.727 7.817 310.944" scale="90 90 90" rotation="90 0 0"
    gltf-model="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/concrete_test_cylinder_w1_1.glb?v=1693308727583">
  </a-entity>

  <a-entity id="cylinderthree" position="152.860 7.817 310.944" scale="90 90 90" rotation="90 0 0"
    gltf-model="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/concrete_test_cylinder_w1_1.glb?v=1693308727583">
  </a-entity>

  <a-entity id="cylinderfour" position="282.594 7.817 247.407" scale="90 90 90" rotation="90 0 0"
    gltf-model="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/concrete_test_cylinder_w1_1.glb?v=1693308727583">
  </a-entity>

  <a-entity id="cylinderfive" position="282.594 7.817 182.540" scale="90 90 90" rotation="90 0 0"
    gltf-model="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/concrete_test_cylinder_w1_1.glb?v=1693308727583">
  </a-entity>

  <a-entity id="cylindersix" position="282.594 7.817 117.673" scale="90 90 90" rotation="90 0 0"
    gltf-model="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/concrete_test_cylinder_w1_1.glb?v=1693308727583">
  </a-entity>

  <a-entity id="sign" position="186.319 41.320 328.063" scale="90 200 100" rotation="0 90 0"
    gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/forward_right_mandatory_direction_sign_traffic.glb?v=1693310898480">
  </a-entity>

  <a-entity id="flowerone" position="237.202 0.877 -154.653" scale="1 1 1"
    gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/geranium_flower.glb?v=1693311919022">
  </a-entity>
  
  <a-entity id="flowertwo" position="237.202 0.877 -13.968" scale="0.100 0.100 0.100"
  gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/flower.glb?v=1693311923466">
  </a-entity>

  <a-entity id="flowerthree" position="237.202 -2.026 122.992" scale="0.200 0.200 0.200"
  gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/colored_flower.glb?v=1693311926395">
  </a-entity>

  <a-entity id="flowerfour" position="237.202 0.877 261.317" scale="0.100 0.100 0.100"
  gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/white_flower.glb?v=1693311929581">
  </a-entity>

  <a-entity id="flowerfive" position="149.712 0.877 282.928" scale="0.100 0.100 0.100"
  gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/white_flower.glb?v=1693311929581">
  </a-entity>

  <a-entity id="flowersix" position="6.809 -2.026 280.969" scale="0.200 0.200 0.200"
  gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/colored_flower.glb?v=1693311926395">
  </a-entity>

  <a-entity id="flowerseven" position="-132.373 -2.026 280.969" scale="0.200 0.200 0.200"
  gltf-model="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/colored_flower.glb?v=1693311926395">
  </a-entity>

</a-entity>

{/* camera & controls */}
<a-entity>
  <a-entity id="rig" position="-33.984 15 9.366" scale="1 1 1" rotation="0 45 0">
    <a-entity id="camera" camera look-controls position="15.122 30.534 370.138" rotation="-13.178 -2.063 0">
    </a-entity>
  </a-entity>
  <a-entity oculus-touch-controls="hand: left" trigger-check thumbstick-logging raycaster="showLine: true"></a-entity>
  <a-entity id="rtcontroller" oculus-touch-controls="hand: right" trigger-check thumbstick-logging
    raycaster="showLine: true"></a-entity>
</a-entity>  
</a-scene>


    </div>
  )
}

export default Inmersive