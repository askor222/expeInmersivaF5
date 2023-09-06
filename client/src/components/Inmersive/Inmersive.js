import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

const Inmersive = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBoxClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (

    <div>
      <a-scene physics="debug: true">
        {/* Default lighting injected by A-Frame.  */}
        <a-entity light="type: ambient; color: #BBB"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="-0.5 1 1"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="0.5 -1 -1"></a-entity>

        {/* camera & controls  */}
        <a-entity position="-15 30 0">
          <a-entity id="rig" position="-15 30 0" scale="1 1 1" rotation="0 45 0">
            <a-entity camera="" position="-15 30 0" wasd-controls="" rotation="" look-controls="" aframe-injected="" data-aframe-inspector-original-camera="" raycaster="objects: [data-raycastable]">
              <a-cursor cursor="rayOrigin: mouse; fuse: false" raycaster="objects: .raycastable; objects: .clickable"></a-cursor></a-entity>
            <a-entity oculus-touch-controls="hand: left" trigger-check thumbstick-logging raycaster="showLine: true"></a-entity>
            <a-entity id="rtcontroller" oculus-touch-controls="hand: right" trigger-check thumbstick-logging raycaster="showLine: true"></a-entity>
          </a-entity>
        </a-entity>

        {/* Asset management system  */}
        <a-assets>
          <a-asset-item id="walls" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/Oficina10.glb?v=1693579074653" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="cabins" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/Cabinas1.glb?v=1693982095823" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="ground" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/floor_whitetile_20x20_meters.glb?v=1692870723480" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="ceiling" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/floor_whitetile_20x20_meters.glb?v=1692870723480" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="sidewalk" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/sidewalk_mm1.glb?v=1693303827295" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="cylinder" src="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/concrete_test_cylinder_w1_1.glb?v=1693308727583" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="sign" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/forward_right_mandatory_direction_sign_traffic.glb?v=1693310898480" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="flower" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/geranium_flower.glb?v=1693311919022" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="table" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/office_table.glb?v=1693471856833" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="bigchair" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/sillaSalones.glb?v=1693571975940" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="littlechair" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/side_chair.glb?v=1693572977645" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="micro" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/micro.glb?v=1693571982721" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="shelf" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/shoe_shelf.glb?v=1693829626150" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="counter" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/mesonCorcho.glb?v=1693828959299" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="fridge" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/avali_fridge.glb?v=1693834008536" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="bin" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/rubbish_bin.glb?v=1693835604945" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="OfficeDoor" animation-mixer="action" play-all-model-animations modify-materials src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/puertaOficina.glb?v=1693474755665" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="stairTables" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/escalerasCocho.glb?v=1693550218142" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="robot" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/robot.glb?v=1693812662910" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/robot.glb?v=1693812662910" crossorigin="anonymous"></a-asset-item>
          <a-asset-item id="blueDoor" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/puertaAzulFlores.glb?v=1693570610262"></a-asset-item>
          <img id="textwallOrange" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/Captura%20de%20pantalla%202023-09-05%20212606.png?v=1693942112443" />
          <img id="textwallKitchen" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/kitchen.JPG?v=1693943846102" />
          <img id="textwallTables" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/Captura%20de%20pantalla%202023-09-06%20073207.png?v=1693978342118" />
          <a-asset-item id="whiteDoor" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/whiteDoor.glb?v=1693982738385"></a-asset-item>

        </a-assets>

        {/* floor & walls & ceiling & sidewalk. */}
        <a-entity position="0 0 0">
          <a-gltf-model src="#ground" position="-199.308 5.800 230.262" scale="21 180 27.500"></a-gltf-model>
          <a-gltf-model src="#walls" position="0 2.099 0"></a-gltf-model>
          <a-gltf-model src="#cabins" position="32.46307 14.307 -7.879"></a-gltf-model>
          {/* <a-gltf-model src="#ceiling" position="-199.928 106.298 233.193" scale="21 180 27.500"></a-gltf-model> */}
        </a-entity>

        {/* sidewalk & flowers */}
        <a-entity position="0 0 0">
          <a-gltf-model src="#sidewalk" gltf-model="#sidewalk" position="237.867 14.805 -15.488" scale="0.285 2.5 0.200" rotation="0 90 0"></a-gltf-model>
          <a-gltf-model src="#sidewalk" gltf-model="#sidewalk" position="8.619 14.805 281.197" scale="0.285 2.5 0.200"></a-gltf-model>
          <a-gltf-model src="#sidewalk" gltf-model="#sidewalk" position="8.619 14.805 281.197" scale="0.285 2.5 0.200"></a-gltf-model>
          <a-gltf-model src="#sidewalk" gltf-model="#sidewalk" position="8.619 14.805 281.197" scale="0.285 2.5 0.200"></a-gltf-model>
          <a-gltf-model src="#cylinder" gltf-model="#cylinder" position="282.606 27.048 310.944" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
          <a-gltf-model src="#cylinder" gltf-model="#cylinder" position="282.606 27.048 310.944" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
          <a-gltf-model src="#cylinder" gltf-model="#cylinder" position="217.727 27.048 310.944" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
          <a-gltf-model src="#cylinder" gltf-model="#cylinder" position="152.860 27.048 310.944" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
          <a-gltf-model src="#cylinder" gltf-model="#cylinder" position="282.594 27.048 247.407" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
          <a-gltf-model src="#cylinder" gltf-model="#cylinder" position="282.594 27.048 182.540" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
          <a-gltf-model src="#cylinder" gltf-model="#cylinder" position="282.594 27.048 117.673" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
          <a-gltf-model src="#sign" gltf-model="#sign" position="186.319 55.767 328.063" scale="90 200 100" rotation="0 90 0"></a-gltf-model>
          <a-gltf-model src="#flower" gltf-model="#flower" position="237.202 27.611 -154.653" scale="1 1 1"></a-gltf-model>
          <a-gltf-model src="#flower" gltf-model="#flower" position="237.202 17.230 -13.968" scale="1 1 1"></a-gltf-model>
          <a-gltf-model src="#flower" gltf-model="#flower" position="237.202 14.968 122.992" scale="1 1 1"></a-gltf-model>
          <a-gltf-model src="#flower" gltf-model="#flower" position="147.931 17.195 284.336" scale="1 1 1"></a-gltf-model>
          <a-gltf-model src="#flower" gltf-model="#flower" position="6.809 15.496 280.969" scale="1 1 1"></a-gltf-model>
          <a-gltf-model src="#flower" gltf-model="#flower" position="-132.373 16.021 280.969" scale="1 1 1"></a-gltf-model>
        </a-entity>

        {/* tables */}
        <a-entity position="0 0 0">

          {/* first classroom  */}
          <a-gltf-model src="#table" gltf-model="#table" position="139.311 37.004 70.728" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="138.502 37.004 94.596" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="54.561 37.004 70.728" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="54.561 37.004 94.177" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="139.311 37.004 -32.191" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="139.311 37.004 -8.448" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="57.470 37.004 -37.351" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="57.078 37.004 -13.859" scale="0.300 0.300 0.300"></a-gltf-model>

          {/* second classroom  */}
          <a-gltf-model src="#table" gltf-model="#table" position="41.701 37.004 -254.492" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="41.995 37.004 -231.110" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="42.142 37.004 -207.433" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="42.102 37.004 -183.729" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="142.067 37.004 -159.399" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="141.525 37.004 -254.492" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="142.024 37.004 -231.100" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="142.631 37.004 -207.443" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="142.590 37.004 -183.739" scale="0.300 0.300 0.300"></a-gltf-model>
          <a-gltf-model src="#table" gltf-model="#table" position="42.486 37.004 -159.104" scale="0.300 0.300 0.300"></a-gltf-model>
        </a-entity>

        {/* chairs */}

        <a-entity>
          {/* bigchairs  */}
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="20.000 23.624 108.160" scale="0.250 0.250 0.250"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="17.969 25.100 133.710" scale="0.250 0.250 0.250"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="11.869 22.556 73.344" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="11.869 22.556 73.344" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="71.136 23.247 57.549" scale="0.250 0.250 0.250" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="69.657 23.246 78.973" scale="0.250 0.250 0.250" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="85.595 23.109 111.966" scale="0.250 0.250 0.250" rotation="0 -270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="71.439 25.049 109.160" scale="0.250 0.250 0.250" rotation="0 -270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="112.380 28.019 130.687" scale="0.250 0.250 0.250"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="110.992 27.910 109.964" scale="0.250 0.250 0.250"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="95.674 23.342 76.689" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="116.757 27.799 69.449" scale="0.250 0.250 0.250" rotation="0 -90 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="151.779 24.107 57.512" scale="0.250 0.250 0.250" rotation="0 -180 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="147.460 23.097 82.826" scale="0.250 0.250 0.250" rotation="0 -180 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="168.949 23.106 117.384" scale="0.250 0.250 0.250" rotation="0 -270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="149.915 22.942 119.293" scale="0.250 0.250 0.250" rotation="0 -270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="29.526 24.225 2.507" scale="0.250 0.250 0.250"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="25.172 22.588 26.396" scale="0.250 0.250 0.250"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="68.171 22.791 -50.711" scale="0.250 0.250 0.250" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="70.213 23.410 -28.150" scale="0.250 0.250 0.250" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="62.265 22.677 9.439" scale="0.250 0.250 0.250" rotation="0 90 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="91.735 23.354 6.647" scale="0.250 0.250 0.250" rotation="0 90 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="18.127 23.945 -40.300" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="40.660 23.198 -40.597" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position=" 113.845 26.655 32.497" scale="0.250 0.250 0.250"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="109.872 24.428 8.140" scale="0.250 0.250 0.250"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="91.689 24.402 -34.811" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="116.173 22.290 -40.663" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
          <a-gltf-model src="#bigchair" gltf-model="#bigchair" position="150.600 25.324 14.209" scale="0.250 0.250 0.250" rotation="0 90 0"></a-gltf-model>

          {/* littlechairs  */}
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="13.720 13.977 -147.292" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="13.720 13.977 -172.642" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="13.720 13.977 -193.852" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="13.720 13.977 -216.853" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="13.720 13.977 -240.025" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="111.280 13.977 -147.293" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="111.280 13.977 -171.352" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="111.280 13.977 -198.842" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="111.280 13.977 -219.512" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="111.280 13.977 -242.862" scale="35 35 35"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="61.542 13.977 -147.292" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="61.542 13.977 -171.941" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="61.542 13.977 -195.452" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="61.542 13.977 -216.742" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="61.542 13.977 -239.940" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="163.764 13.977 -147.2922" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="163.764 13.977 -169.923" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="163.764 13.977 -193.045" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="163.764 13.977 -220.523" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
          <a-gltf-model src="#littlechair" gltf-model="#littlechair" position="163.764 13.977 -293.325" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
        </a-entity>

        {/* kitchen  */}
        <a-entity>
          <a-gltf-model src="#micro" gltf-model="#micro" position="-114.154 24.161 -8.873" scale="25 25 25"></a-gltf-model>
          <a-gltf-model src="#micro" gltf-model="#micro" position="-113.749 33.528 -7.532" scale="25 25 25"></a-gltf-model>
          <a-gltf-model src="#micro" gltf-model="#micro" position="-114.154 24.161 -60.539" scale="25 25 25"></a-gltf-model>
          <a-gltf-model src="#micro" gltf-model="#micro" position="-114.154 33.057 -60.539" scale="25 25 25"></a-gltf-model>
          <a-gltf-model src="#shelf" gltf-model="#shelf" position="-203.512 19.356 60.694" scale="2 2 2" rotation="0 90 0"></a-gltf-model>
          <a-gltf-model src="#shelf" gltf-model="#shelf" position="-203.512 19.356 9.226" scale="2 2 2" rotation="0 90 0"></a-gltf-model>
          <a-gltf-model src="#counter" gltf-model="#counter" position="-22.266 70.266 -39.094" scale="1 0.500 1.050"></a-gltf-model>
          <a-gltf-model src="#fridge" gltf-model="#fridge" position="-110.742 19.695 -35.267" scale="0.025 0.025 0.025" rotation="0 90 0"></a-gltf-model>
          {/* <a-gltf-model src="#bin" gltf-model="#bin" position="" scale="1 1 1" rotation=""></a-gltf-model> */}
          <a-gltf-model src="#stairTables" position="-21.36272 94.10765 -7.430" rotation="" scale="1 1 1.3" static-body></a-gltf-model>

        </a-entity>

        {/* office */}
        <a-entity>
          <a-gltf-model src="#OfficeDoor" position="-85.21431 19.00612 251.69945" rotation="0 90 0" scale="38 38 27.5"></a-gltf-model>
        </a-entity>

        {/* Others extra */}
        <a-gltf-model src="#robot" position="-82.52723 -0.68568 -80.70277" rotation="0 29.999999999999996 0" scale="4 4 4"></a-gltf-model>
        <a-gltf-model src="#whiteDoor" position="-8.35728 18.7513 -99.35885" rotation="0 90 0" scale="25 31 3"></a-gltf-model>
        <a-gltf-model src="#whiteDoor" position="-8.35728 18.7513 -98.037" rotation="0 90 0" scale="25 31 3"></a-gltf-model>

        {/* <a-box id="modal-root" cursor-listener="true" position="-70.88825 63.88425 -60.95718" scale="4 4 4" material="" geometry="" animation="property: rotation; to: 0 360 0; loop: NaN; dur: 3000" color="darkblue" rotation="0 122.43271174762475 0"><a-text value="...Cursos-F5" text="color: #121111; side: double" scale="4 4 4" rotation="0 260 0"></a-text></a-box> */}
        <a-box id="modal-root" class="clickable" cursor-listener="true" position="-70.88825 63.88425 -60.95718" scale="4 4 4" material="" geometry=""
          animation="property: rotation; to: 0 360 0; loop: true; dur: 3000" color="darkblue"
          onClick={handleBoxClick}><a-text value="...Cursos-F5" text="color: #121111; side: double" scale="4 4 4" rotation="0 260 0"></a-text>
        </a-box>

        <a-entity id="textOrange" position="43.83693 76.71028 136.80361" scale="50 40 0.00001" geometry="primitive: box" material="src: #textwallOrange"></a-entity>
        <a-entity id="textwallKitchen" position="-107.69562 87.16169 -89.29855" scale="30 20 0.00001" rotation="0 270 0" geometry="primitive: box" material="src: #textwallKitchen"></a-entity>
        <a-entity id="textwallTables" position="-59.43186 79.69786 -154.5751" scale="70 40 0.00001" rotation="0 180 0" geometry="primitive: box" material="src: #textwallTables"></a-entity>

        <a-gltf-model src="#blueDoor" position="33.35131 -97.92487 -220" rotation="" scale="1 1 1.2"
          dynamic-body animation="property: position; to: 33.35131 -97.92487 -200; on: click; dur: 1000;"></a-gltf-model>

        <a-sky color="lightblue"></a-sky>

      </a-scene>

      <Modal show={showModal} onHide={handleCloseModal} id="modal-content">
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Content of the modal goes here.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Inmersive