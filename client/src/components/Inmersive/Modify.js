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


JSON.stringifyWithCircularRefs = (function() {
  const refs = new Map();
  const parents = [];
  const path = ["this"];

  function clear() {
    refs.clear();
    parents.length = 0;
    path.length = 1;
  }

  function updateParents(key, value) {
    var idx = parents.length - 1;
    var prev = parents[idx];
    if (prev[key] === value || idx === 0) {
      path.push(key);
      parents.push(value);
    } else {
      while (idx-- >= 0) {
        prev = parents[idx];
        if (prev[key] === value) {
          idx += 2;
          parents.length = idx;
          path.length = idx;
          --idx;
          parents[idx] = value;
          path[idx] = key;
          break;
        }
      }
    }
  }

  function checkCircular(key, value) {
    if (value != null) {
      if (typeof value === "object") {
        if (key) { updateParents(key, value); }

        let other = refs.get(value);
        if (other) {
          return '[Circular Reference]' + other;
        } else {
          refs.set(value, path.join('.'));
        }
      }
    }
    return value;
  }

  return function stringifyWithCircularRefs(obj, space) {
    try {
      parents.push(obj);
      return JSON.stringify(obj, checkCircular, space);
    } finally {
      clear();
    }
  }
})();