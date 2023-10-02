import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import './Inmersive.css'
import FetchLink from './FetchLink';
import { Link } from 'react-router-dom';
import 'three';

function Inmersive() {
  const [showModal, setShowModal, setBotonClick] = useState(false);

  const handleBoxClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  const link1 = FetchLink({ pageNumber: 1 });
  const link2 = FetchLink({ pageNumber: 2 });
  const link3 = FetchLink({ pageNumber: 3 });
  const link4 = FetchLink({ pageNumber: 4 });
  const link5 = FetchLink({ pageNumber: 5 });
  const link6 = FetchLink({ pageNumber: 6 });
  const link7 = FetchLink({ pageNumber: 7 });
  const link8 = FetchLink({ pageNumber: 8 });
  const link9 = FetchLink({ pageNumber: 9 });
  const link10 = FetchLink({ pageNumber: 10 });
  const link11 = FetchLink({ pageNumber: 11 });
  const link12 = FetchLink({ pageNumber: 12 });
  const link13 = FetchLink({ pageNumber: 13 });
  
  return (

    <div>
      <a-scene
        frustum-culling="true;"
        renderer="antialias: true;"
        gltf-model="dracoDecoderPath: path/to/decoder/;
        basisTranscoderPath: path/to/transcoder/;
        meshoptDecoderPath: path/to/meshopt_decoder.js;"
      >
        {/* Default lighting injected by A-Frame.  */}
        <a-entity light="type: ambient; color: #BBB"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 0.1" position="2 -2 -2"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="4 4 4"></a-entity>

        {/* camera & controls  */}
        <a-entity position="282 25 247" id="cameraRig" scale="1 1 1" rotation="0 45 0">
          {/* <a-entity position="-15 30 0" id="cameraRig" scale="1 1 1" rotation="0 45 0"> */}
          <a-entity camera="" position="-15 30 0" wasd-controls="acceleration:100" rotation="-15.011 -145.646 0" look-controls="" universal-controls kinematic-body>
            <a-text value="" position="0 0 -3"></a-text>
            <a-cursor cursor="rayOrigin: mouse;" raycaster="objects: data-raycastable; objects: .clickable;"></a-cursor>
          </a-entity>
          <a-entity oculus-touch-controls="hand: left" trigger-check thumbstick-logging raycaster="showLine: true"></a-entity>
          <a-entity id="rtcontroller" oculus-touch-controls="hand: right" trigger-check thumbstick-logging raycaster="showLine: true"></a-entity>
        </a-entity>

        {/* Asset management system  */}
        <a-asset-item id="walls" response-type="arraybuffer" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/Oficina10.glb?v=1693579074653" crossOrigin="anonymous" alt="walls"></a-asset-item>
        <a-asset-item id="cabins" response-type="arraybuffer" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/Cabinas1.glb?v=1693982095823" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="ground" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/floor_whitetile_20x20_meters.glb?v=1692870723480" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="ceiling" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/floor_whitetile_20x20_meters.glb?v=1692870723480" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="sidewalk" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/sidewalk_mm1.glb?v=1693303827295" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="cylinder" response-type="arraybuffer" src="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/concrete_test_cylinder_w1_1.glb?v=1693308727583" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="sign" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/forward_right_mandatory_direction_sign_traffic.glb?v=1693310898480" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="flower" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/geranium_flower.glb?v=1693311919022" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="table" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/office_table.glb?v=1693471856833" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="bigchair" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/sillaSalones.glb?v=1693571975940" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="littlechair" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/side_chair.glb?v=1693572977645" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="micro" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/micro.glb?v=1693571982721" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="shelf" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/shoe_shelf.glb?v=1693829626150" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="counter" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/mesonCorcho.glb?v=1693828959299" crossOrigin="anonymous" alt="" ></a-asset-item>
        <a-asset-item id="fridge" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/avali_fridge.glb?v=1693834008536" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="bin" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/rubbish_bin.glb?v=1693835604945" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="officedoor" response-type="arraybuffer" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/puertaOficina.glb?v=1693474755665" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="stairTables" response-type="arraybuffer" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/escalerasCocho.glb?v=1693550218142" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="robot" response-type="arraybuffer" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/robot.glb?v=1693812662910" crossOrigin="anonymous" alt="robot"></a-asset-item>
        <a-asset-item id="blueDoor" response-type="arraybuffer" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/puertaAzulFlores.glb?v=1693570610262" crossOrigin="anonymous" alt="puertaAzulFlores"></a-asset-item>
        <img id="textwallorange" response-type="arraybuffer" src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/Captura%20de%20pantalla%202023-09-09%20212745.png?v=1694288160748" alt="textoOrange" crossOrigin="anonymous"/>
        <img id="textwallkitchen" response-type="arraybuffer" src="https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/11.png?v=1694288796358" alt="textoKitchen" crossOrigin="anonymous" />
        <img id="textwalltables" response-type="arraybuffer" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/Captura%20de%20pantalla%202023-09-06%20073207.png?v=1693978342118" alt="textoTables" crossOrigin="anonymous"/>
        <a-asset-item id="whitedoor" response-type="arraybuffer" src="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/whiteDoor.glb?v=1693982738385" crossOrigin="anonymous" alt="whiteDoor"></a-asset-item>
        <a-asset-item id="coffee" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/cafetiere.glb?v=1693908142500" crossOrigin="anonymous" alt="cafetiere"></a-asset-item>
        <a-asset-item id="kettle" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/water_kettle.glb?v=1693908142058" crossOrigin="anonymous" alt="water_kettle"></a-asset-item>
        <a-asset-item id="papertowel" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/paper_towel_roll.glb?v=1693908140474" crossOrigin="anonymous" alt="paper_towel_roll"></a-asset-item>
        <a-asset-item id="shelfcomplement" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/metal_shelf.glb?v=1693908140957" crossOrigin="anonymous" alt="metal_shelf"></a-asset-item>
        <a-asset-item id="doorone" response-type="arraybuffer" src="https://cdn.glitch.global/c8a0bc9d-fb9c-45fb-a9ff-0a617f5dfe6e/puertaOficina.glb?v=1693474755665" crossOrigin="anonymous" alt="puertaOficina"></a-asset-item>
        <a-asset-item id="stool" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/TabureteFrenteMicro.glb?v=1693571972405" crossOrigin="anonymous" alt="TabureteFrenteMicro"></a-asset-item>
        <a-asset-item id="ktable" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/table_with_metal_legs.glb?v=1693917468558" crossOrigin="anonymous" alt="table_with_metal_legs"></a-asset-item>
        <a-asset-item id="wc" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/wc_3d_model_-_nora.glb?v=1693942921041" crossOrigin="anonymous" alt="_nora"></a-asset-item>
        <a-asset-item id="sink" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/unseen_bathroom_sink.glb?v=1693942922359" crossOrigin="anonymous" alt="unseen_bathroom_sink"></a-asset-item>
        <a-asset-item id="wfountain" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/drinking_fountain.glb?v=1693942923145" crossOrigin="anonymous" alt="drinking_fountain"></a-asset-item>
        <a-asset-item id="board" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/stuff_in_my_room_whiteboard.glb?v=1693942924452" crossOrigin="anonymous" alt="stuff_in_my_room_whiteboard"></a-asset-item>
        <a-asset-item id="cubicle" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/office_cubicle.glb?v=1694082621594" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="livingwall" response-type="arraybuffer" src="https://cdn.glitch.me/078ce1a5-734a-4824-8ef5-cf5a78251ea1/landscape_living_wall_university_of_greenwich.glb?v=1694084082833" crossOrigin="anonymous" alt="landscape_living_wall_university_of_greenwich"></a-asset-item>
        <a-asset-item id="drawer" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/file_folder_drawer.glb?v=1694275788482" crossOrigin="anonymous" alt="folder_drawer"></a-asset-item>
        <a-asset-item id="zero" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/4b75afd6a6094efd8e942093aef10de4.glb?v=1694287652663" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="number1" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/95f1fc10d2394c6490a3ae7151027653.glb?v=1694287652282" crossOrigin="anonymous" alt=""></a-asset-item>
        <a-asset-item id="curtain" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/curtains.glb?v=1694345440901" crossOrigin="anonymous" alt="curtains"></a-asset-item>
        <a-asset-item id="cabinet" response-type="arraybuffer" src="https://cdn.glitch.global/078ce1a5-734a-4824-8ef5-cf5a78251ea1/Double%20Door%20Upper%20Cabin.glb?v=1694345537335" crossOrigin="anonymous" alt="Cabin"></a-asset-item>
        <img id="qrstreet" response-type="arraybuffer" src="https://cdn.glitch.global/6211dc8f-6ce8-489a-a462-10f300f2e1cc/street.png?v=1695820029802" alt="qr1" crossOrigin="anonymous"/>
        <img id="qrentrada" response-type="arraybuffer" src="https://cdn.glitch.global/3b27913a-e0c0-4999-8a6b-3cacbaa548f5/recepcion.png?v=1695821732540" alt="qr2" crossOrigin="anonymous"/>
        <img id="qroficina" response-type="arraybuffer" src="https://cdn.glitch.global/951679fc-d311-45ac-8cec-a0dd794eb9b3/oficina.png?v=1695820360594" alt="qr3" crossOrigin="anonymous"/>
        <img id="qrcocina" response-type="arraybuffer" src="https://cdn.glitch.global/3b27913a-e0c0-4999-8a6b-3cacbaa548f5/cocina.png?v=1695821983569" alt="qr4" crossOrigin="anonymous"/>
        <img id="qrsalon1" response-type="arraybuffer" src="https://cdn.glitch.global/28e505cf-42af-445b-8568-60b7486fe815/salon1.png?v=1695822138979" alt="qr5" crossOrigin="anonymous"/>
        <img id="qrsalon2" response-type="arraybuffer" src="https://cdn.glitch.global/18f39ff2-1b2d-4e59-a8d4-8de045bab8e5/salon2.png?v=1695822251441" alt="qr6" crossOrigin="anonymous"/>
        <a-asset-item id="firstdoor" response-type="arraybuffer" src="https://cdn.glitch.global/860cdd0a-dc8f-4cf3-9491-eed9e6420fd3/DoorCristalentrada.only.glb?v=1694414908394" crossOrigin="anonymous" alt=""></a-asset-item>
        <img id="ar1" response-type="arraybuffer" src="https://cdn.glitch.global/860cdd0a-dc8f-4cf3-9491-eed9e6420fd3/IMG_20230908_094322.jpg?v=1694458745402" alt="ar1" crossOrigin="anonymous"/>
        <img id="ar2" response-type="arraybuffer" src="https://cdn.glitch.global/860cdd0a-dc8f-4cf3-9491-eed9e6420fd3/door1.jpg?v=1694458748471" alt="ar2" crossOrigin="anonymous"/>
        <img id="ar3" response-type="arraybuffer" src="https://cdn.glitch.global/860cdd0a-dc8f-4cf3-9491-eed9e6420fd3/IMG_20230908_094344(1).jpg?v=1694458759027" alt="ar3" crossOrigin="anonymous"/>
        <img id="ar4" response-type="arraybuffer" src="" alt="ar4" crossOrigin="anonymous"/>
        <img id="texttest" response-type="arraybuffer" src="https://cdn.glitch.global/13335002-678c-41c0-b54f-50b392a3793b/texttest.png?v=1695655250486" alt="texttest" crossOrigin="anonymous"/>
        <img id="textreact" response-type="arraybuffer" src="https://cdn.glitch.global/13335002-678c-41c0-b54f-50b392a3793b/react.png?v=1695656791931" alt="textreact" crossOrigin="anonymous"/>

        <a-entity id="Ana" position="82.311 19 -4.728" rotation="0 -70 0" scale="25 26 28"
            animation-mixer="clip: *; loop: true" play-all-model-animations modify-materials 
            gltf-model="https://cdn.glitch.global/13335002-678c-41c0-b54f-50b392a3793b/AnaWriting.glb?v=1695649197210"
          renderer="antialias: true"></a-entity>

        <a-entity id="Jorge" position="80.311 20 -50.728" rotation="0 -43 0" scale="30 30 30"
            animation-mixer="clip: *; loop: true" play-all-model-animations modify-materials 
            gltf-model="https://cdn.glitch.global/13335002-678c-41c0-b54f-50b392a3793b/jorge.glb?v=1695654626608"
          renderer="antialias: true"></a-entity>

        <a-entity id="sara" position="-36.557 18.072 -51.563" scale="28 27 29" rotation="0 43 0"
            animation-mixer="clip: *; loop: true" play-all-model-animations modify-materials 
            gltf-model="https://cdn.glitch.global/13335002-678c-41c0-b54f-50b392a3793b/SaraWriting.glb?v=1695650412254"></a-entity>

        {/* floor & walls & ceiling & sidewalk. */}
        <a-gltf-model src="#ground" position="-199.308 5.800 230.262" scale="21 180 27.500"></a-gltf-model>
        <a-gltf-model src="#walls" dynamic-body="shape: glb; mass: 2"  className=".objects" position="0 2.099 0"></a-gltf-model>
        <a-gltf-model src="#cabins" position="32.5898 10 -6.7067"></a-gltf-model>
        <a-gltf-model src="#ceiling" position="-199.928 117.298 233.193" scale="21 180 27.500"></a-gltf-model>

        {/* sidewalk & flowers */}
        <a-gltf-model src="#sidewalk"  position="237.867 14.805 -15.488" scale="0.285 2.5 0.200" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#sidewalk"  position="8.619 14.805 281.197" scale="0.285 2.5 0.200"></a-gltf-model>
        <a-gltf-model src="#sidewalk"  position="8.619 14.805 281.197" scale="0.285 2.5 0.200"></a-gltf-model>
        <a-gltf-model src="#sidewalk" position="8.619 14.805 281.197" scale="0.285 2.5 0.200"></a-gltf-model>
        <a-gltf-model src="#cylinder" position="282.606 27.048 310.944" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
        <a-gltf-model src="#cylinder"  position="282.606 27.048 310.944" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
        <a-gltf-model src="#cylinder"  position="217.727 27.048 310.944" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
        <a-gltf-model src="#cylinder"  position="152.860 27.048 310.944" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
        <a-gltf-model src="#cylinder"  position="282.594 27.048 247.407" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
        <a-gltf-model src="#cylinder"  position="282.594 27.048 182.540" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
        <a-gltf-model src="#cylinder"  position="282.594 27.048 117.673" scale="90 90 90" rotation="90 0 0"></a-gltf-model>
        <a-gltf-model src="#sign"  position="186.319 55.767 328.063" scale="90 200 100" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#flower"  position="237.202 27.611 -154.653" scale="1 1 1"></a-gltf-model>
        <a-gltf-model src="#flower"  position="237.202 17.230 -13.968" scale="1 1 1"></a-gltf-model>
        <a-gltf-model src="#flower"  position="237.202 14.968 122.992" scale="1 1 1"></a-gltf-model>
        <a-gltf-model src="#flower"  position="147.931 17.195 284.336" scale="1 1 1"></a-gltf-model>
        <a-gltf-model src="#flower"  position="6.809 15.496 280.969" scale="1 1 1"></a-gltf-model>
        <a-gltf-model src="#flower"  position="-132.373 16.021 280.969" scale="1 1 1"></a-gltf-model>

        {/* tables */}
        {/* first classroom  */}
        <a-gltf-model src="#table"  position="139.311 37.004 70.728" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="138.502 37.004 94.596" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="54.561 37.004 70.728" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="54.561 37.004 94.177" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="139.311 37.004 -32.191" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="139.311 37.004 -8.448" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="57.470 37.004 -37.351" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="57.078 37.004 -13.859" scale="0.300 0.300 0.300"></a-gltf-model>

        {/* second classroom  */}
        <a-gltf-model src="#table"  position="41.701 37.004 -254.492" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="41.995 37.004 -231.110" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="42.142 37.004 -207.433" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="42.102 37.004 -183.729" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="142.067 37.004 -159.399" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="141.525 37.004 -254.492" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="142.024 37.004 -231.100" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="142.631 37.004 -207.443" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="142.590 37.004 -183.739" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="42.486 37.004 -159.104" scale="0.300 0.300 0.300"></a-gltf-model>

        {/* chairs */}
        {/* bigchairs  */}
        <a-gltf-model src="#bigchair"  position="29.000 23.624 108.160" scale="0.250 0.250 0.250"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="28.969 25.100 133.710" scale="0.250 0.250 0.250"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="11.869 22.556 73.344" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="11.869 22.556 73.344" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="71.136 23.247 57.549" scale="0.250 0.250 0.250" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="69.657 23.246 78.973" scale="0.250 0.250 0.250" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="85.595 23.109 111.966" scale="0.250 0.250 0.250" rotation="0 -270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="71.439 25.049 109.160" scale="0.250 0.250 0.250" rotation="0 -270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="112.380 28.019 130.687" scale="0.250 0.250 0.250"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="110.992 27.910 109.964" scale="0.250 0.250 0.250"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="95.674 23.342 76.689" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="116.757 27.799 69.449" scale="0.250 0.250 0.250" rotation="0 -90 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="151.779 24.107 57.512" scale="0.250 0.250 0.250" rotation="0 -180 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="147.460 23.097 82.826" scale="0.250 0.250 0.250" rotation="0 -180 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="168.949 23.106 117.384" scale="0.250 0.250 0.250" rotation="0 -270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="149.915 22.942 119.293" scale="0.250 0.250 0.250" rotation="0 -270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="29.526 24.225 2.507" scale="0.250 0.250 0.250"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="25.172 22.588 26.396" scale="0.250 0.250 0.250"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="68.171 22.791 -50.711" scale="0.250 0.250 0.250" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="70.213 23.410 -28.150" scale="0.250 0.250 0.250" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="62.265 22.677 9.439" scale="0.250 0.250 0.250" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="91.735 23.354 6.647" scale="0.250 0.250 0.250" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="18.127 23.945 -40.300" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="40.660 23.198 -40.597" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="113.845 26.655 32.497" scale="0.250 0.250 0.250"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="109.872 24.428 8.140" scale="0.250 0.250 0.250"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="91.689 24.402 -34.811" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="116.173 22.290 -40.663" scale="0.250 0.250 0.250" rotation="0 270 0"></a-gltf-model>
        <a-gltf-model src="#bigchair"  position="150.600 25.324 14.209" scale="0.250 0.250 0.250" rotation="0 90 0"></a-gltf-model>

        {/* littlechairs  */}
        <a-gltf-model src="#littlechair"  position="13.720 13.977 -147.292" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="13.720 13.977 -172.642" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="13.720 13.977 -193.852" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="13.720 13.977 -216.853" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="13.720 13.977 -240.025" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="111.280 13.977 -147.293" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="111.280 13.977 -171.352" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="111.280 13.977 -198.842" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="111.280 13.977 -219.512" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="111.280 13.977 -242.862" scale="35 35 35"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="61.542 13.977 -147.292" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="61.542 13.977 -171.941" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="61.542 13.977 -195.452" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="61.542 13.977 -216.742" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="61.542 13.977 -239.940" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="163.764 13.977 -147.2922" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="163.764 13.977 -169.923" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="163.764 13.977 -193.045" scale="35 35 35" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#littlechair"  position="163.764 13.977 -220.523" scale="35 35 35" rotation="0 180 0"></a-gltf-model>

        {/* kitchen  */}
        <a-gltf-model src="#micro"  position="-114.154 24.161 -8.873" scale="25 25 25"></a-gltf-model>
        <a-gltf-model src="#micro"  position="-113.749 33.528 -7.532" scale="25 25 25"></a-gltf-model>
        <a-gltf-model src="#micro"  position="-114.154 24.161 -60.539" scale="25 25 25"></a-gltf-model>
        <a-gltf-model src="#micro"  position="-114.154 33.057 -60.539" scale="25 25 25"></a-gltf-model>
        <a-gltf-model src="#shelf"  position="-203.512 19.356 60.694" scale="2 2 2" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#shelf"  position="-203.512 19.356 9.226" scale="2 2 2" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#counter"  position="-22.266 70.266 -39.094" scale="1 0.500 1.050" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#fridge"  position="-110.742 19.695 -35.267" scale="0.025 0.025 0.025" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#stairTables" position="-21.6 92.10765 -7.430" rotation="" scale="1 1 1.3" static-body repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#bin"  position="-115.820 25.987 -24.783" scale="4 4 4" rotation="0 0 -45"></a-gltf-model>
        <a-gltf-model src="#bin"  position="-115.585 25.783 -31.989" scale="4 4 4" rotation="0 0 -45"></a-gltf-model>
        <a-gltf-model src="#bin"  position="-119.014 31.562 -31.989" scale="4 4 4" rotation="0 0 -45"></a-gltf-model>
        <a-gltf-model src="#bin"  position="-118.667 31.339 -24.513" scale="4 4 4" rotation="0 0 -45"></a-gltf-model>
        <a-gltf-model src="#shelf" position="-208.966 19.356 -0.530" scale="2.5 2.5 2.5" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#coffee"  position="-124.207 45.020 -66.715" scale="3 3 3"></a-gltf-model>
        <a-gltf-model src="#kettle"  position="-111.362 46.540 -66.189" scale="0.800 0.800 0.800"></a-gltf-model>
        <a-gltf-model src="#papertowel"  position="-96.215 45.201 -77.71994" scale="0.400 0.400 0.400"></a-gltf-model>
        <a-gltf-model src="#shelfcomplement"  position="-97.827 39.895 -90.713" scale="0.500 0.500 0.500" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#stool"  position="-45.66618 32.69487 -43.57858" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool"  position="-40.208 33 -6.756" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool"  position="-40.208 33 14.597" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool"  position="-40.208 33 34.940" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool"  position="-40.208 33 59.133" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool"  position="-40.208 33 74.636" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#ktable" position="-20.9704 36.87206 14.857" scale="0.020 0.020 0.100"></a-gltf-model>
        <a-gltf-model src="#curtain" position="-175.490 12.952 14.207" scale="20 28 15"></a-gltf-model>

        {/* lobby */}
        <a-gltf-model src="#counter"  position="40.011 227.093 115.608" scale="0.5 3.5 0.7" rotation="0 90 0" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#counter"  position="58.558 225.800 151.523" scale="0.100 3.5 0.5" rotation="0 180 0" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#counter"  position="9.897 225.128 157.324" scale="0.100 3.5 0.200" rotation="0 180 0" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#counter"  position="6.023 56.91078 139.01875" scale="1 0.300 2" rotation="0 90 0" repeat="3 3"></a-gltf-model>
        <a-gltf-model src="#stool"  position="59.940 37.339 227" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool"  position="37.335 37.339 227" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool"  position="18.143 37.339 227" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool"  position="0.031 37.339 227" scale="40 40 40"></a-gltf-model>
        <a-gltf-model src="#stool"  position="-23.797 37.339 227" scale="40 40 40"></a-gltf-model>


        {/* office */}
        <a-gltf-model src="#officedoor" position="-85.21431 19.00612 251.69945" rotation="0 90 0" scale="38 38 27.5"></a-gltf-model>
        <a-gltf-model src="#table"  position="-78.502 38.534 206.041" scale="0.300 0.300 0.300"></a-gltf-model>
        <a-gltf-model src="#table"  position="-78.502 38.534 183.144" scale="0.300 0.300 0.300"></a-gltf-model>

        {/* classrooms */}
        <a-gltf-model src="#drawer" position="-2.288 33.602 87.767" scale="2.990 4 5"></a-gltf-model>
        <a-gltf-model src="#drawer" position="-2.288 33.602 76.760" scale="2.990 4 5"></a-gltf-model>
        <a-gltf-model src="#board" position="42.797 66.989 -257.801" scale="3 3 3" rotation="0 0 90"></a-gltf-model>
        <a-gltf-model src="#board"  position="32.334 63.073 -58.977" scale="3 3 3" rotation="0 0 90"></a-gltf-model>
        <a-gltf-model src="#cabinet" position="126.309 40.042 -75.746" scale="40 50 40" rotation="0 180 0"></a-gltf-model>

        {/* toilets */}
        <a-gltf-model src="#wc"  position="-196.521 23.500 48.047" scale="30 30 30"></a-gltf-model>
        <a-gltf-model src="#wc"  position="-199.920 23.500 -31.82" scale="30 30 30" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#sink" position="-185.490 51.528 -73.125" scale="0.3 0.3 0.3"></a-gltf-model>
        <a-gltf-model src="#sink"  position="-155.294 51.528 90.406" scale="0.3 0.3 0.3" rotation="0 270 0"></a-gltf-model>
        <a-gltf-model src="#wfountain"  position="-155.604 45.135 73.014" scale="20 20 20" rotation="0 -90 0"></a-gltf-model>
        <a-gltf-model src="#cubicle" position="-121.531 20.397 145.865" scale="4 4 4" rotation="0 180 0"></a-gltf-model>
        <a-gltf-model src="#cubicle" position="-195.464 20.397 232.403" scale="4 4 4"></a-gltf-model>
        {/* classrooms */}
        <a-gltf-model src="#drawer"  position="-2.288 33.602 87.767" scale="2.990 4 5"></a-gltf-model>
        <a-gltf-model src="#drawer"  position="-2.288 33.602 76.760" scale="2.990 4 5"></a-gltf-model>
        <a-gltf-model src="#board"  position="42.797 66.989 -257.801" scale="3 3 3" rotation="0 0 90"></a-gltf-model>
        <a-gltf-model src="#board" position="32.334 63.073 -58.977" scale="3 3 3" rotation="0 0 90"></a-gltf-model>
        <a-gltf-model src="#cabinet"  position="126.309 40.042 -75.746" scale="40 50 40" rotation="0 180 0"></a-gltf-model>

        {/* Others extra */}
        <a-gltf-model src="#robot" position="-82.52723 -0.68568 -80.70277" rotation="0 29.999999999999996 0" scale="4 4 4" modify-materials></a-gltf-model>
        <a-gltf-model src="#whitedoor" position="-9.22466 19.29432 -72.57483" rotation="0 210 0" scale="27 32 4"></a-gltf-model>
        <a-gltf-model src="#whitedoor" position="-122.37783 22.09653 34.87024" rotation="0 0 0" scale="27 32 4"></a-gltf-model>
        <a-gltf-model src="#whitedoor" position="-12.22746 21.03736 122.72313" rotation="0 200 0" scale="27 30 4" gltf-model="https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/whiteDoor.glb?v=1693982738385"></a-gltf-model>
        <a-image geometry="primitive: box" material="src: #textwalltables; side: double" position="-58 79 -150.5337" scale="90 40 1"></a-image>
        <a-image geometry="primitive: box" material="src: #textwallorange; side: front" position="45 75 134" scale="50 40 1"></a-image>
        <a-image geometry="primitive: box" material="src: #textwallkitchen; side: double" position="-108 82 -96" rotation="0 90 0" scale="45 25 1"></a-image>
        <a-image geometry="primitive: box" material="src: #qrstreet; side: double" position="193 60 195" rotation="0 44 0" scale="18 15 1"></a-image>
        <a-image geometry="primitive: box" material="src: #qrentrada; side: double" position="-3 80 144" rotation="0 0 0" scale="12 12 1"></a-image>
        <a-image geometry="primitive: box" material="src: #qroficina; side: double" position="-60 50 200.69945" rotation="0 90 0" scale="25 20 1"></a-image>
        <a-image geometry="primitive: box" material="src: #qrcocina; side: double" position="-13 70 79" rotation="0 90 0" scale="30 25 1"></a-image>
        <a-image geometry="primitive: box" material="src: #qrsalon1; side: double" position="100 70 -64" rotation="0 0 0" scale="20 22 1"></a-image>
        <a-image geometry="primitive: box" material="src: #qrsalon2; side: double" position="120.701 80 -275" rotation="0 0 0" scale="45 25 1"></a-image>
        <a-gltf-model src="#firstdoor" position="181.49966 87.71111 254.39745" rotation="10 50 0" scale="38 38 27.5"></a-gltf-model>
        <a-gltf-model src="#firstdoor" position="219.05842 90 207.48084" rotation="10 50 0" scale="38 38 27.5"></a-gltf-model>
        <a-gltf-model src="#firstdoor" position="188.71141 62.111 247" rotation="10 50 0" scale="38 38 27.5"
          animation="property: position; to: 180.71141 62.111 252; dur: 2000;" animation-mixer="action"></a-gltf-model>
        <a-gltf-model src="#firstdoor" position="209 90 217.41414" rotation="10 50 0" scale="38 38 27.5"
          animation="property: position; to: 210 90 205.41414; dur: 2000;" animation-mixer="action"></a-gltf-model>

        <a-gltf-model src="#livingwall"  position="-99.011 76.848 -148.708" scale="3 12 5.010"></a-gltf-model>
        <a-gltf-model src="#livingwall"  position="-17.263 76.848 -148.708" scale="3 12 5.010"></a-gltf-model>
        <a-gltf-model src="#zero"  position="-143.207 49.267 65.677" scale="150 150 150" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model src="#number1"  position="-143.207 55.691 32.706" scale="150 150 150" rotation="0 90 0"></a-gltf-model>
        <a-image geometry="primitive: box" material="src: #ar1; side: double" position="3.22466 62.691 -80.57483" rotation="0 30 0" scale="15 15 1"></a-image>
        <a-image geometry="primitive: box" material="src: #ar2; side: double" position="2 62 116.87024" rotation="0 20 0" scale="15 15 1"></a-image>
        <a-image geometry="primitive: box" material="src: #texttest; side: double" position="32.334 63.073 -57.977" rotation="0 0 0" scale="64 50 1"></a-image>
        <a-image geometry="primitive: box" material="src: #textreact; side: double" position="42.797 66.989 -255.801" rotation="0 0 0" scale="64 50 1"></a-image>

        <a-box id="modal-root" class="clickable" cursor-listener="true" position="-70.88825 63.88425 -60.95718" scale="4 4 4" material="" geometry=""
          animation="property: rotation; to: 0 360 0; loop: true; dur: 3000" color="darkblue"
          onClick={handleBoxClick}><a-text value="...Cursos-F5" text="color: #121111; side: double" scale="4 4 4" rotation="0 260 0"></a-text>
        </a-box>

        <a-gltf-model id="dooranimation" class="clickable" src="#blueDoor" position="33.35131 -93.92487 -225" rotation="" scale="1 1 1.2"
          dynamic-body animation-mixer="action" play-all-model-animations animation="property: position; to: 33.35131 -97.92487 -220; dur: 3000; click;"
        ></a-gltf-model>

        <a-sky material="src: https://cdn.glitch.global/14078d2f-a798-4e8b-893e-5f9452ffb468/cieloazul.jpg?v=1694152531313"></a-sky>
      </a-scene>

      <Modal show={showModal} onHide={handleCloseModal} id="modal-content">
        <Modal.Header closeButton>
          <Modal.Title>Nuestros Cursos Tecnológicos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <p><strong>MADRID</strong></p>
            <li>
              <p>Desarrollo Web Full stack 👉<a href={link1} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li><li>
              <p>Desarrollo Web Full Stack y Tecnologías Inmersivas 👉<a href={link2} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li><li>
              <p>Desarrollo Web Full stack (Formación exclusiva para mujeres)-  Financiador: Google.org 👉<a href={link3} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li><li>
              <p>Desarrollo Web Full Stack y Ciberseguridad 👉<a href={link4} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li>
            <p><strong>BARCELONA</strong></p>
            <li>
              <p>Desarrollo Web Frontend 👉<a href={link5} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li><li>
              <p>Ciberseguridad en entornos híbridos 👉<a href={link6} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li><li>
              <p>Formación en Cloud AWS re/Start 👉<a href={link7} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li><li>
              <p>Desarrollo Web Full stack - Financiador: Fundació La Caixa y Aigües de Barcelona 👉<a href={link8} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li><li>
              <p>Desarrollo Web Full stack (Formación exclusiva para mujeres)-  Financiador: Google.org 👉<a href={link9} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li>
            <p><strong>GIJÓN</strong></p>
            <li>
              <p>Desarrollo Web Full stack 👉<a href={link10} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li>
            <p><strong>ASTURIAS / CANTABRIA / CASTILLA Y LEÓN / GALICIA</strong></p>
            <li>
              <p>Desarrollo Web Full stack - (Formación exclusiva para mujeres)-  Financiador: Google.org 👉<a href={link11} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li>
            <p><strong>ASTURIAS </strong></p>
            <li>
              <p>Desarrollo Web Full stack 👉<a href={link12} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li>
            <p><strong>COMUNIDAD VALENCIANA</strong></p>
            <li>
              <p>Formación en Cloud AWS re/start 👉<a href={link13} target="_blank" rel="noopener noreferrer">pincha aquí</a></p>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseModal}>
            <strong>Cerrar</strong>
          </Button>
        </Modal.Footer>
      </Modal>

      <Link to="/"> 
        <button className="btn btn-light" onClick>
          <strong>Volver</strong>
        </button>
      </Link>
    </div>
  );
}

export default Inmersive;
