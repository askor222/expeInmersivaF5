
import 'aframe';
import './Logo.css';

function Logo() {

  return (
    <a-scene embedded>
      <a-entity position="-1.47814 1.94377 -3.57342" rotation="90 29.999999999999996 2" scale="20. 20. 20." animation-mixer="action" play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/c55c420c-bc3f-41b6-858e-f2e36523fc3c/sol3.glb?v=1693482539125"></a-entity>

      <a-entity position="-2.1879 2.0279 -7.006" rotation="10 20 29.999999999999994" scale="20 20 20" animation-mixer="action" play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/c55c420c-bc3f-41b6-858e-f2e36523fc3c/flecha.glb?v=1693483410512"></a-entity>
 <a-sky src="https://cdn.glitch.global/abada9d9-6043-4e41-ae92-9f39ededeb19/IMG_0660.JPG?v=1693404421007"></a-sky>
    </a-scene>

  );
}

export default Logo;