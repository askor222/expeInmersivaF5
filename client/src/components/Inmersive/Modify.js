AFRAME.registerComponent('play-all-model-animations', {
  init: function () {
    this.model = null;
    this.mixer = null;

    var model = this.el.getObject3D('mesh');
    if (model) {
      this.load(model);
    } else {
      this.el.addEventListener('model-loaded', function (e) {
        this.load(e.detail.model);
      }.bind(this));
    }
  },

  load: function (model) {
    this.model = model;
    this.mixer = new THREE.AnimationMixer(model);
    this.model.animations.forEach(animation => {
      this.mixer.clipAction(animation, model).play();
    });
  },

  tick: function (t, dt) {
    if (this.mixer && !isNaN(dt)) {
      this.mixer.update(dt / 1000);
    }
  }
});

AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      console.log('Player hit something!');
    });
  }
});

//click door
AFRAME.registerComponent('click-listener', {
  init: function () {
    var el = this.el;

    el.addEventListener('click', function () {
      var currentPosition = el.getAttribute('position');
      var originalPosition = el.getAttribute('DoorAnimation');

      if (!originalPosition) {
        originalPosition = currentPosition;
        el.setAttribute('DoorAnimation', currentPosition);
      }

      if (AFRAME.utils.deepEqual(currentPosition, originalPosition)) {
        // El modelo está en su posición original, mueve el modelo a la posición deseada
        el.setAttribute('position', '33.35131 -97.92487 -225');
      } else {
        // El modelo no está en su posición original, restaura la posición original
        el.setAttribute('position', originalPosition);
      }
    });
  }
});