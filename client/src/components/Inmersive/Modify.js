  
  
  AFRAME.registerComponent('thumbstick-logging',{
    init: function () {
      this.el.addEventListener('thumbstickmoved', this.logThumbstick);
    },
    logThumbstick: function (evt) {
      if (evt.detail.y > 0.95) { console.log("DOWN"); }
      if (evt.detail.y < -0.95) { console.log("UP"); }
      if (evt.detail.x < -0.95) { console.log("LEFT"); }
      if (evt.detail.x > 0.95) { console.log("RIGHT"); }
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
  
  
  function init(id) {
    showLoading();
    scene = new THREE.Scene();
    light = new THREE.AmbientLight(0xffffff);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    boundingBox = new THREE.Box3();
  
    canvas = document.getElementById(id);
  
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#f2f2f2");
  
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
  
    scene.add(light);
  }
  
 
  export default AFRAME.registerComponent('gltf-model-legacy', {
    schema: {type: 'model'},
  
    init: function () {
      this.model = null;
      this.loader = null;
      this.loaderPromise = loadLoader().then(() => {
        this.loader = new THREE.GLTFLoader();
        this.loader.setCrossOrigin('Anonymous');
      });
    },
  
    update: function () {
      const self = this;
      const el = this.el;
      const src = this.data;
  
      if (!src) { return; }
  
      this.remove();
  
      this.loaderPromise.then(() => {
        this.loader.load(src, function gltfLoaded (gltfModel) {
          self.model = gltfModel.scene;
          self.model.animations = gltfModel.animations;
          el.setObject3D('mesh', self.model);
          el.emit('model-loaded', {format: 'gltf', model: self.model});
        });
      });
    },
  
    remove: function () {
      if (!this.model) { return; }
      this.el.removeObject3D('mesh');
    }
  });


  const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Elegimos nuestro punto de entrada
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  }, 
  resolve: {
    extensions: [".js", ".jsx"], 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader", 
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};