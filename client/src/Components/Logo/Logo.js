
import './Logo.css';

function Logo() {

  return (
    <a-scene embedded>
      <a-entity position="-3.56849 0.7934 -2.38507" rotation="90 30 2" scale="8.1 8.1 8.1" animation-mixer="action" play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/c55c420c-bc3f-41b6-858e-f2e36523fc3c/sol3.glb?v=1693482539125"></a-entity>
      <a-entity position="-2.47938 0.80536 -2.16517" rotation="10 20 30" scale="17 17 17" animation-mixer="action" play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/c55c420c-bc3f-41b6-858e-f2e36523fc3c/flecha.glb?v=1693483410512"></a-entity>


    </a-scene>

  );
}

export default Logo;