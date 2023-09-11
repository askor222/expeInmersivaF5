const puerta = document.querySelector('#');
      let abierta = false;

      puerta.addEventListener('click', () => {
        if (abierta) {
          // Cierra la puerta (gira hacia posición cerrada)
          puerta.setAttribute('animation', {
            property: 'rotation',
            to: '0 0 0',
            dur: 1000, // Duración de la animación en milisegundos
          });
        } else {
          // Abre la puerta (gira en dirección abierta en el eje Y)
          puerta.setAttribute('animation', {
            property: 'rotation',
            to: '0 90 0', // Gira 90 grados alrededor del eje Y
            dur: 1000, // Duración de la animación en milisegundos
          });
        }

        // Cambia el estado de la puerta
        abierta = !abierta;
      });
