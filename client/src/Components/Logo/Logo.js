import React from "react";

const Logo = () => {
  const usuarioLogeado = true;

  const handleLogoClick = () => {
    if (!usuarioLogeado) {

      alert("Haz login para disfrutar de la experiencia inmersiva");
    } else {
      window.location.href = "https://mighty-superb-turn.glitch.me/"; 
    }
  };

  return (
    <a-scene cursor="rayOrigin: mouse">
       <a-light type="ambient" intensity="0.9"></a-light>
      <a-cursor
        id="cursor"
        raycaster="objects: a-entity"
        cursor="fuse: false; rayOrigin: mouse"
      ></a-cursor>

<a-entity
        id="logo"
        position="-0.762 1.697 -1.816"
        rotation="20 -30 -40"
        scale="50 50 50"
        animation-mixer="clip: *; loop: true" 
        play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/32e0a0b5-d4a0-44fd-8422-65f2983beb08/peludo4.glb?v=1694434088289"
        onClick={handleLogoClick}
      ></a-entity>

{/* <a-image src="" 
        position="0 2 -5"           
        scale="1 1 1">
                     
      </a-image> */}




      <a-sky src="https://cdn.glitch.global/32e0a0b5-d4a0-44fd-8422-65f2983beb08/FONDOFINAL.JPG?v=1694435785858" rotation="0 -80 0" position="0 -10 -70" material="" geometry=""></a-sky>
    </a-scene>
  );
};

export default Logo;

