import { loadGLTF } from "./libs/loader.js";

const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async () => {

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './targets.mind',
    });
    const { renderer, scene, camera } = mindarThree;

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    const gltf = await loadGLTF('./assets/logof5.gltf');
    gltf.scene.scale.set(4, 4, 4);
    gltf.scene.position.set(0, -0.4, 0);

    const hedy = await loadGLTF('./assets/hedy.gltf');
    hedy.scene.scale.set(10, 10, 10);
    hedy.scene.position.set(0, -0.5, 0);

    const mary = await loadGLTF('./assets/mary.gltf');
    mary.scene.scale.set(8, 8, 8);
    mary.scene.position.set(0, -0.6, 0);

    const lounge = await loadGLTF('./assets/lounge.gltf');
    lounge.scene.scale.set(7, 7, 7);
    lounge.scene.position.set(0, -0.6, 0);

    const office = await loadGLTF('./assets/office.gltf');
    office.scene.scale.set(10, 10, 10);
    office.scene.position.set(0, -0.5, 0);


    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(gltf.scene);

    const hedyanchor = mindarThree.addAnchor(1);
    hedyanchor.group.add(hedy.scene);

    const maryanchor = mindarThree.addAnchor(2);
    maryanchor.group.add(mary.scene);

    const loungeanchor = mindarThree.addAnchor(3);
    loungeanchor.group.add(lounge.scene);

    const officeanchor = mindarThree.addAnchor(4);
    officeanchor.group.add(office.scene);

    /*await mindarThree.start();
    renderer.setAnimationLoop(() => {

      renderer.render(scene, camera);
    });
    */
    const clock = new THREE.Clock();

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      const delta = clock.getDelta();
      gltf.scene.rotation.set(0, gltf.scene.rotation.y + delta, 0);
      renderer.render(scene, camera);
    });

  }
  start();
});
