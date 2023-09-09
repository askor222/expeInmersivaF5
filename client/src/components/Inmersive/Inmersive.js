import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Inmersive.css'

function InmersiveExpe() {
  const [showModal, setShowModal] = useState(false);

  const handleBoxClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (

    <div>
      <a-scene 
      frustum-culling="true"
      renderer="antialias: true;
      sortObjects: true;
      physicallyCorrectLights: true;
      maxCanvasWidth: 1920;
      maxCanvasHeight: 1920;"
        cursor="rayOrigin:mouse"
        physics>

        {/* Default lighting injected by A-Frame.  */}
        <a-entity light="type: ambient; color: #BBB"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 4.3" position="-2 2 1"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 4" position="2 -2 -2"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 1" position="4 4 4"></a-entity>

        {/* camera & controls  */}
        {/* <a-entity position="282 25 247" id="cameraRig" scale="1 1 1" rotation="0 45 0"> */}
        <a-entity position="-15 30 0" id="cameraRig" scale="1 1 1" rotation="0 45 0">
          <a-entity camera="" position="-15 30 0" wasd-controls="" rotation="-15.011 -145.646 0" look-controls="" aframe-injected="" data-aframe-inspector-original-camera="">
            <a-text value="o" position="0 0 -3"></a-text>
            <a-cursor cursor="rayOrigin: mouse; fuse: true" raycaster="objects: [data-raycastable]; objects: .clickable"></a-cursor>
          </a-entity>
          <a-entity oculus-touch-controls="hand: left" trigger-check thumbstick-logging raycaster="showLine: true"></a-entity>
          <a-entity id="rtcontroller" oculus-touch-controls="hand: right" trigger-check thumbstick-logging raycaster="showLine: true"></a-entity>
        </a-entity>

        {/* Asset management system  */}
        <a-asset-item id="walls" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/Oficina10.glb?v=1693579074653" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="cabins" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/Cabinas1.glb?v=1693982095823" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="ground" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/floor_whitetile_20x20_meters.glb?v=1692870723480" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="ceiling" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/floor_whitetile_20x20_meters.glb?v=1692870723480" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="sidewalk" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/sidewalk_mm1.glb?v=1693303827295" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="cylinder" src="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/concrete_test_cylinder_w1_1.glb?v=1693308727583" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="sign" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/forward_right_mandatory_direction_sign_traffic.glb?v=1693310898480" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="flower" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/geranium_flower.glb?v=1693311919022" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="table" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/office_table.glb?v=1693471856833" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="bigchair" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/sillaSalones.glb?v=1693571975940" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="littlechair" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/side_chair.glb?v=1693572977645" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="micro" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/micro.glb?v=1693571982721" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="shelf" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/shoe_shelf.glb?v=1693829626150" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="counter" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/mesonCorcho.glb?v=1693828959299" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="fridge" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/avali_fridge.glb?v=1693834008536" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="bin" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/rubbish_bin.glb?v=1693835604945" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="OfficeDoor" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/puertaOficina.glb?v=1693474755665" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="stairTables" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/escalerasCocho.glb?v=1693550218142" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="robot" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/robot.glb?v=1693812662910" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="blueDoor" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/puertaAzulFlores.glb?v=1693570610262" crossOrigin="anonymous"></a-asset-item>
        <img id="textwallOrange" src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/Captura%20de%20pantalla%202023-09-09%20212745.png?v=1694288160748" alt="textoOrange" crossOrigin="anonymous"/>
        <img id="textwallKitchen" src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/11.png?v=1694288796358" alt="textoKitchen" crossOrigin="anonymous"/>
        <img id="textwallTables" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/Captura%20de%20pantalla%202023-09-06%20073207.png?v=1693978342118" alt="textoTables" crossOrigin="anonymous"/>
        <a-asset-item id="whiteDoor" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/whiteDoor.glb?v=1693982738385" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="coffee" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/cafetiere.glb?v=1693908142500" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="kettle" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/water_kettle.glb?v=1693908142058" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="papertowel" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/paper_towel_roll.glb?v=1693908140474" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="shelfcomplement" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/metal_shelf.glb?v=1693908140957" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="doorone" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/puertaOficina.glb?v=1693474755665" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="stool" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/TabureteFrenteMicro.glb?v=1693571972405" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="ktable" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/table_with_metal_legs.glb?v=1693917468558" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="wc" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/wc_3d_model_-_nora.glb?v=1693942921041" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="sink" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/unseen_bathroom_sink.glb?v=1693942922359" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="wfountain" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/drinking_fountain.glb?v=1693942923145" crossOrigin="anonymous"></a-asset-item>
        <a-asset-item id="board" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/stuff_in_my_room_whiteboard.glb?v=1693942924452" crossOrigin="anonymous"></a-asset-item>

        {/* floor & walls & ceiling & sidewalk. */}
        <a-gltf-model src="#ground" position="-199.308 5.800 230.262" scale="21 180 27.500"></a-gltf-model>
        <a-gltf-model src="#walls" position="0 2.099 0"></a-gltf-model>
        <a-gltf-model src="#cabins" position="32.5898 14.307 -6.7067"></a-gltf-model>
        {/* <a-gltf-model src="#ceiling" position="-199.928 106.298 233.193" scale="21 180 27.500"></a-gltf-model> */}


        {/* sidewalk & flowers */}
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

        {/* tables */}
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

        {/* chairs */}
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

        {/* kitchen  */}
        <a-gltf-model src="#micro" gltf-model="#micro" position="-114.154 24.161 -8.873" scale="25 25 25"></a-gltf-model>
        <a-gltf-model src="#micro" gltf-model="#micro" position="-113.749 33.528 -7.532" scale="25 25 25"></a-gltf-model>
        <a-gltf-model src="#micro" gltf-model="#micro" position="-114.154 24.161 -60.539" scale="25 25 25"></a-gltf-model>
        <a-gltf-model src="#micro" gltf-model="#micro" position="-114.154 33.057 -60.539" scale="25 25 25"></a-gltf-model>
        <a-gltf-model src="#shelf" gltf-model="#shelf" position="-203.512 19.356 60.694" scale="2 2 2" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#shelf" gltf-model="#shelf" position="-203.512 19.356 9.226" scale="2 2 2" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#counter" gltf-model="#counter" position="-22.266 70.266 -39.094" scale="1 0.500 1.050" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#fridge" gltf-model="#fridge" position="-110.742 19.695 -35.267" scale="0.025 0.025 0.025" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#stairTables" position="-21.6 94.10765 -7.430" rotation="" scale="1 1 1.3" static-body repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#bin" gltf-model="#bin" position="-115.820 25.987 -24.783" scale="4 4 4" rotation="0 0 -45"></a-gltf-model>
        <a-gltf-model src="#bin" gltf-model="#bin" position="-115.585 25.783 -31.989" scale="4 4 4" rotation="0 0 -45"></a-gltf-model>
        <a-gltf-model src="#bin" gltf-model="#bin" position="-119.014 31.562 -31.989" scale="4 4 4" rotation="0 0 -45"></a-gltf-model>
        <a-gltf-model src="#bin" gltf-model="#bin" position="-118.667 31.339 -24.513" scale="4 4 4" rotation="0 0 -45"></a-gltf-model>
        <a-gltf-model src="#shelf" gltf-model="#shelf" position="-208.966 19.356 -0.530" scale="2.5 2.5 2.5" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#coffee" gltf-model="#coffee" position="-124.207 47.020 -66.715" scale="3 3 3"></a-gltf-model>
        <a-gltf-model src="#kettle" gltf-model="#kettle" position="-111.362 46.540 -66.189" scale="0.800 0.800 0.800"></a-gltf-model>
        <a-gltf-model src="#papertowel" gltf-model="#papertowel" position="-96.215 45.201 -77.71994" scale="0.400 0.400 0.400"></a-gltf-model>
        <a-gltf-model src="#shelfcomplement" gltf-model="#shelfcomplement" position="-97.827 39.895 -90.713" scale="0.500 0.500 0.500" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="-40.208 33 -27.121" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="-40.208 33 -6.756" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="-40.208 33 14.597" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="-40.208 33 34.940" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="-40.208 33 59.133" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="-40.208 33 74.636" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#ktable" gltf-model="#ktable" position="-20.9704 34.87206 14.857" scale="0.020 0.020 0.100"></a-gltf-model>
        <a-gltf-model src="#ground" scale="21 180 27.5" gltf-model="#ground"></a-gltf-model>

        {/* lobby */}
        <a-gltf-model src="#counter" gltf-model="#counter" position="40.011 227.093 115.608" scale="0.5 3.5 0.7" rotation="0 90 0" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#counter" gltf-model="#counter" position="58.558 225.800 151.523" scale="0.100 3.5 0.5" rotation="0 180 0" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#counter" gltf-model="#counter" position="9.897 225.128 157.324" scale="0.100 3.5 0.200" rotation="0 180 0" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#counter" gltf-model="#counter" position="6.023 56.91078 139.01875" scale="1 0.300 2" rotation="0 90 0" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="59.940 37.339 227" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="37.335 37.339 227" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="18.143 37.339 227" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="0.031 37.339 227" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool" gltf-model="#stool" position="-23.797 37.339 227" scale="40 40 40"></a-gltf-model>

        {/* office */}
        <a-gltf-model src="#OfficeDoor" position="-85.21431 19.00612 251.69945" rotation="0 90 0" scale="38 38 27.5"></a-gltf-model>
        <a-gltf-model src="#table" gltf-model="#table" position="" scale="0.300 0.300 0.300" rotation=""></a-gltf-model>

        {/* Others extra */}
        <a-gltf-model src="#robot" position="-82.52723 -0.68568 -80.70277" rotation="0 29.999999999999996 0" scale="4 4 4"></a-gltf-model>
        <a-gltf-model src="#whiteDoor" position="-10.57368 18.7513 -98.68865" rotation="0 90 0" scale="27 32 4"></a-gltf-model>
        <a-gltf-model src="#whiteDoor" position="-12.87287 20.09653 97.20416" rotation="0 90 0" scale="27 32 4"></a-gltf-model>
        <a-gltf-model src="#whiteDoor" position="-122.37783 22.09653 34.87024" rotation="0 0 0" scale="27 32 4"></a-gltf-model>
        <a-entity geometry="primitive: box" material="src: #textwallTables; side: double" position="-58 78 -150.5337" scale="90 40 1"></a-entity>
        <a-entity geometry="primitive: box" material="src: #textwallOrange; side: front" position="45 75 136" scale="50 40 1"></a-entity>
        <a-entity geometry="primitive: box" material="src: #textwallKitchen; side: double" position="-108 85 -89" rotation="0 90 0" scale="25 20 1"></a-entity>



        <a-box id="modal-root" class="clickable" cursor-listener="true" position="-70.88825 63.88425 -60.95718" scale="4 4 4" material="" geometry=""
          animation="property: rotation; to: 0 360 0; loop: true; dur: 3000" color="darkblue"
          onClick={handleBoxClick}><a-text value="...Cursos-F5" text="color: #121111; side: double" scale="4 4 4" rotation="0 260 0"></a-text>
        </a-box>

        <a-gltf-model id="DoorAnimation" class="clickable" src="#blueDoor" cursor-listener="true" position="33.35131 -97.92487 -225" rotation="" scale="1 1 1.2"
          dynamic-body animation-mixer="action" play-all-model-animations 
          >
        </a-gltf-model>

        <a-sky material="src: https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/cieloazul.jpg?v=1694152531313"></a-sky>
      </a-scene>

      <Modal show={showModal} onHide={handleCloseModal} id="modal-content">
        <Modal.Header closeButton>
          <Modal.Title> Nuestros Cursos Tecnológicos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
              <p><strong>MADRID</strong></p>
              <li>
                <p>Desarrollo Web Full stack 👉<Link to="https://talentomadrid.factoriaf5.org/?utm_source=rompemosclic
" target="_blank">pincha aquí</Link></p>
              </li><li>
                <p>Desarrollo Web Full Stack y Tecnologías Inmersivas 👉<Link to="https://talentomadrid.factoriaf5.org/?utm_source=rompemosclic
" target="_blank">pincha aquí</Link></p>
              </li><li>
                <p>Desarrollo Web Full stack (Formación exclusiva para mujeres)-  Financiador: Google.org 👉<Link to="https://femcoders.factoriaf5.org/?utm_source=rompemosclic
" target="_blank">pincha aquí</Link></p>
              </li><li>
                <p>Desarrollo Web Full Stack y Ciberseguridad 👉<Link to="https://talentomadrid.factoriaf5.org/?utm_source=rompemosclic
" target="_blank">pincha aquí</Link></p>
              </li>
                <p><strong>BARCELONA</strong></p>
                <li>
                 <p>Desarrollo Web Frontend 👉<Link to="https://rompemosloscodigos.typeform.com/frontend-300h?utm_source=rompemosclic&typeform-source=www.somosf5.org
" target="_blank">pincha aquí</Link></p>
                </li><li>
                <p>Ciberseguridad en entornos híbridos 👉<Link to="https://rompemosloscodigos.typeform.com/to/sWEbgc7r?utm_source=rompemosclic&typeform-source=www.somosf5.org
" target="_blank">pincha aquí</Link></p>
                </li><li>
                <p>Formación en Cloud AWS re/Start 👉<Link to="https://awsrestartbootcamp.cloud.factoriaf5.org/#formulario?utm_source=rompemosclic
" target="_blank">pincha aquí</Link></p>
                </li><li>
                <p>Desarrollo Web Full stack - Financiador: Fundació La Caixa y Aigües de Barcelona 👉<Link to="https://rompemosloscodigos.typeform.com/full-stack-bcn?utm_source=rompemosclic&typeform-source=www.somosf5.org	
" target="_blank">pincha aquí</Link></p>
                </li><li>
                <p>Desarrollo Web Full stack (Formación exclusiva para mujeres)-  Financiador: Google.org 👉<Link to="https://femcoders.factoriaf5.org/?utm_source=rompemosclic
" target="_blank">pincha aquí</Link></p>
                </li>
                <p><strong>GIJÓN</strong></p>
                <li>
                <p>Desarrollo Web Full stack 👉<Link to="https://rompemosloscodigos.typeform.com/to/Phmkxuwj?utm_source=rompemosclic&typeform-source=www.somosf5.org
" target="_blank">pincha aquí</Link></p>
                </li>
                <p><strong>ASTURIAS / CANTABRIA / CASTILLA Y LEÓN / GALICIA</strong></p>
                <li>
                <p>Desarrollo Web Full stack - (Formación exclusiva para mujeres)-  Financiador: Google.org 👉<Link to="https://femcoders.factoriaf5.org/?utm_source=rompemosclic
" target="_blank">pincha aquí</Link></p>
                </li>
                <p><strong>ASTURIAS </strong></p>
                <li>
                <p>Desarrollo Web Full stack 👉<Link to="https://rompemosloscodigos.typeform.com/factoria-f5-ast?utm_source=rompemosclic&typeform-source=www.somosf5.org
" target="_blank">pincha aquí</Link></p>
                </li>
                <p><strong>COMUNIDAD VALENCIANA</strong></p>
                <li>
                <p>Formación en Cloud AWS re/start 👉<Link to="https://awsrestartbootcamp.cloud.factoriaf5.org/#formulario?utm_source=rompemosclic
" target="_blank">pincha aquí</Link></p>
                </li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={handleCloseModal}>
                <strong>Cerrar</strong>
              </Button>
            </Modal.Footer>
          </Modal>

        </div>

        );
}

        export default InmersiveExpe;
