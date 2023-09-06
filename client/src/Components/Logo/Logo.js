
import 'aframe';
import './Logo.css';

function Logo() {

  return (
    <a-scene embedded>
      <a-entity position="-1.47814 1.94377 -3.57342" rotation="90 29.999999999999996 2" scale="10.1 10.1 10.1" animation-mixer="action" play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/c55c420c-bc3f-41b6-858e-f2e36523fc3c/sol3.glb?v=1693482539125"></a-entity>

      <a-entity position="-2.1879 2.0279 -7.006" rotation="10 20 29.999999999999994" scale="30 40 50" animation-mixer="action" play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/c55c420c-bc3f-41b6-858e-f2e36523fc3c/flecha.glb?v=1693483410512"></a-entity>

    </a-scene>

  );
}

export default Logo;