import React from "react";

const Logo = () => {
  return (
    <a-scene>
      <a-entity
        position="-1.47814 1.94377 -3.57342"
        rotation="90 29.999999999999996 2"
        scale="20 20 20"
        animation-mixer="action"
        play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/c55c420c-bc3f-41b6-858e-f2e36523fc3c/sol3.glb?v=1693482539125"
      ></a-entity>

      <a-entity
        position="-2.1879 2.0279 -7.006"
        rotation="10 20 29.999999999999994"
        scale="20 20 20"
        animation-mixer="action"
        play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/c55c420c-bc3f-41b6-858e-f2e36523fc3c/flecha.glb?v=1693483410512"
      ></a-entity>

      <a-sky src="https://cdn.glitch.global/610dfb6f-70b8-412d-9647-71052f6c88f7/IMG_0661.JPG?v=1694089158495" material="" geometry="" rotation="0 190 0" position="0 0 200"></a-sky>
    </a-scene>
  );
};

export default Logo;