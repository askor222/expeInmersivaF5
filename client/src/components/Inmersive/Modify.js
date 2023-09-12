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





var registerComponent = require('../core/component').registerComponent;
var THREE = require('../lib/three');
var utils = require('../utils/');
var warn = utils.debug('components:gltf-model:warn');

/**
 * glTF model loader.
 */
module.exports.Component = registerComponent('gltf-model', {
  schema: {type: 'model'},

  init: function () {
    var self = this;
    var dracoLoader = this.system.getDRACOLoader();
    var meshoptDecoder = this.system.getMeshoptDecoder();
    var ktxLoader = this.system.getKTX2Loader();
    this.model = null;
    this.loader = new THREE.GLTFLoader();
    if (dracoLoader) {
      this.loader.setDRACOLoader(dracoLoader);
    }
    if (meshoptDecoder) {
      this.ready = meshoptDecoder.then(function (meshoptDecoder) {
        self.loader.setMeshoptDecoder(meshoptDecoder);
      });
    } else {
      this.ready = Promise.resolve();
    }
    if (ktxLoader) {
      this.loader.setKTX2Loader(ktxLoader);
    }
  },

  update: function () {
    var self = this;
    var el = this.el;
    var src = this.data;

    if (!src) { return; }

    this.remove();

    this.ready.then(function () {
      self.loader.load(src, function gltfLoaded (gltfModel) {
        self.model = gltfModel.scene || gltfModel.scenes[0];
        self.model.animations = gltfModel.animations;
        el.setObject3D('mesh', self.model);
        el.emit('model-loaded', {format: 'gltf', model: self.model});
      }, undefined /* onProgress */, function gltfFailed (error) {
        var message = (error && error.message) ? error.message : 'Failed to load glTF model';
        warn(message);
        el.emit('model-error', {format: 'gltf', src: src});
      });
    });
  },

  remove: function () {
    if (!this.model) { return; }
    this.el.removeObject3D('mesh');
  }
});