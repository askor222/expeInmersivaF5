import React from "react";

const Logo = () => {
  const usuarioLogeado = true; // Cambia esto a true o false según la lógica de tu aplicación

  const handleLogoClick = () => {
    if (!usuarioLogeado) {
      // Si el usuario no está logeado, muestra una alerta
      alert("Haz login para disfrutar de la experiencia inmersiva");
    } else {
      // Si el usuario está logeado, redirige a la experiencia inmersiva
      window.location.href = "/escena-inmersiva"; // Reemplaza con la ruta correcta
    }
  };

  return (
    <a-scene cursor="rayOrigin: mouse">
      <a-cursor
        id="cursor"
        raycaster="objects: a-entity"
        cursor="fuse: false; rayOrigin: mouse"
      ></a-cursor>

      <a-entity
        id="logo"
        position="-0.76153 1.69731 -1.81621"
        rotation="50 29.999999999999996 0"
        scale="50 50 50"
        animation-mixer="clip: *; loop: true" // Establece loop en true para reproducir en bucle
        play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/7c1c0518-f693-47be-a537-212322ff837a/peludomorado3.glb?v=1694165512957"
        onClick={handleLogoClick}
      ></a-entity>

      <a-entity
        position="-2.1879 2.0279 -7.006"
        rotation="10 20 29.999999999999994"
        scale="20 20 20"
        animation-mixer="clip"
        play-all-model-animations=""
        gltf-model="https://cdn.glitch.global/c55c420c-bc3f-41b6-858e-f2e36523fc3c/flecha.glb?v=1693483410512">
      </a-entity>

      <a-sky src="https://cdn.glitch.global/7c1c0518-f693-47be-a537-212322ff837a/IMG_0777.JPG?v=1694162552275" material="" geometry="" rotation="0 -470 0" position="0 -100 0" visible="" scale="-1.000 1.000 1.000"></a-sky>  
    </a-scene>
  );
};

export default Logo;

