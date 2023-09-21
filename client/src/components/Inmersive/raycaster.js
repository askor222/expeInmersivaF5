
AFRAME.registerComponent('log', {
  
    init: function () {
      var debugtxt = document.querySelector('a-text');
      debugtxt.setAttribute('value', '');
    }
  });
  
  AFRAME.registerComponent("log", {
    init: function () {
      var debugtxt = document.querySelector("a-text");
      debugtxt.setAttribute("value", "goodnite");
    },
  });
  
  AFRAME.registerComponent("thumbstick-logging", {
    init: function () {
      this.el.addEventListener("thumbstickmoved", this.logThumbstick);
    },
    logThumbstick: function (evt) {
      var debugtxt = document.querySelector("a-text");
      var cameraRig = document.querySelector("#cameraRig");
  
      if (evt.detail.y > 0.95) {
        debugtxt.setAttribute("value", "DOWN");
        cameraRig.object3D.translateZ(0.95);
      }
      if (evt.detail.y < -0.95) {
        debugtxt.setAttribute("value", "UP");
        cameraRig.object3D.translateZ(-0.95);
      }
      if (evt.detail.x < -0.95) {
        debugtxt.setAttribute("value", "LEFT");
        cameraRig.object3D.rotateY(THREE.MathUtils.degToRad(1));
      }
      if (evt.detail.x > 0.95) {
        debugtxt.setAttribute("value", "RIGHT");
        cameraRig.object3D.rotateY(THREE.MathUtils.degToRad(-1));
      }
    },
  });
  
  
  AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
  
    init: function () {
     
      console.log('ok collider check');
      var debugtxt = document.querySelector('a-text');
      var thunksound = document.querySelector('#thunk');
      
      this.el.addEventListener('raycaster-intersection', function (e) {
        this.selectedObj = e.detail.els[0];
        debugtxt.setAttribute('value', 'Cargate a los coders!');
      });
      
      this.el.addEventListener('raycaster-intersection-cleared', function (e) {
        this.selectedObj = null;
        
      });
      
        
      this.el.addEventListener('triggerdown', function (e) {
        
          if(!this.selectedObj) return;
        
          debugtxt.setAttribute('value', this.selectedObj.id);
          this.selectedObj.parentNode.removeChild(this.selectedObj);
          thunksound.play();
        
      });
    },
    
    });
  
  
    AFRAME.registerComponent('navigate-on-click', {
      schema: {
        url: {
          default: ''
        }
      },

      init: function() {
        var data = this.data;
        var el = this.el;

        el.addEventListener('click', function() {
          window.location.href = data.url;
        });
      }
    });
  









