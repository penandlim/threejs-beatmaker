import * as THREE from 'three/build/three.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import $ from 'jquery';
import { PickHelper } from "./PickHelper";
import { HumanModel } from "./HumanModel";
import { cloneGltf } from "./three-clone-gltf";

window.THREE = THREE;

function main() {
    const canvas = document.querySelector('#threejs');
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const fov = 45;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 30);

    let nextCamPos = new THREE.Vector3(0,0,0);
    let nextCamRot = new THREE.Vector3(0,0,0);

    const scene = new THREE.Scene();
    scene.add(camera);
    window.scene = scene;
    scene.background = new THREE.Color('gray');

    const clock = new THREE.Clock();

    const humanModels = [];
    const raycastableObjs = [];
    window.humanModels = humanModels;

    const picker = new PickHelper();
    const pickPosition = {x: 0, y: 0};

    {
        const planeSize = 40;

        const loader = new THREE.TextureLoader();
        const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        const repeats = planeSize / 2;
        texture.repeat.set(repeats, repeats);

        const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
        const planeMat = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(planeGeo, planeMat);
        mesh.name = "Ground";
        mesh.receiveShadow = true;
        mesh.rotation.x = Math.PI * -.5;
        scene.add(mesh);
    }

    {
        const skyColor = 0xB1E1FF;  // light blue
        const groundColor = 0xB97A20;  // brownish orange
        const intensity = 1;
        const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
        light.name = "HemisphereLight";
        scene.add(light);
    }

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(5, 10, 2);
        light.castShadow = true;
        light.name = "DirectionalLight";
        scene.add(light);
        scene.add(light.target);
    }

    {
        const color = 0xFFFFFF;
        const intensity = 0.1;
        const light = new THREE.AmbientLight(color, intensity);
        light.position.set(5, 10, 2);
        light.name = "AmbientLight";
        scene.add(light);
    }

    function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
        const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
        const halfFovY = THREE.Math.degToRad(camera.fov * .5);
        const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
        // compute a unit vector that points in the direction the camera is now
        // in the xz plane from the center of the box
        const direction = (new THREE.Vector3())
            .subVectors(camera.position, boxCenter)
            .multiply(new THREE.Vector3(1, 0, 1))
            .normalize();

        // move the camera to a position distance units way from the center
        // in whatever direction the camera was from the center already
        camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

        // pick some near and far values for the frustum that
        // will contain the box.
        camera.near = boxSize / 100;
        camera.far = boxSize * 100;

        camera.updateProjectionMatrix();

        // point the camera to look at the center of the box
        camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
    }

    {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('models/everything-trimmed.glb', (gltf) => {
            const root = gltf.scene;

            root.traverse( function ( object ) {
                if ( object.isMesh ) {
                    object.castShadow = true;
                    object.material = new THREE.MeshPhongMaterial( { skinning: true, flatShading: true } );
                }
            });

            let character = root.children[0];
            let humanModel = new HumanModel(character, gltf.animations);
            humanModels.push(humanModel);
            raycastableObjs.push(humanModel.object3d.children[1]);

            let clonedGLTF = cloneGltf(gltf);

            let humanModel2 = new HumanModel(clonedGLTF.scene.children[0], clonedGLTF.animations);
            humanModels.push(humanModel2);
            humanModel2.object3d.position.x = 2;
            raycastableObjs.push(humanModel2.object3d.children[1]);

            scene.add(humanModel.object3d);
            scene.add(humanModel2.object3d);


            // compute the box that contains all the stuff
            // from root and below
            const box = new THREE.Box3().setFromObject(humanModel.object3d);

            const boxSize = box.getSize(new THREE.Vector3()).length();
            const boxCenter = box.getCenter(new THREE.Vector3());

            // set the camera to frame the box
            frameArea(boxSize, boxSize, boxCenter, camera);

            // update the Trackball controls to handle the new size
            // controls.maxDistance = boxSize * 10;
            // controls.target.copy(boxCenter);
            // controls.update();
        });
    }

    const resizeRendererToDisplaySize = (renderer) => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    };

    const render = () => {
        let delta = clock.getDelta();

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        // Update the animation mixer, the stats panel, and render this frame
        for (let i = 0; i < humanModels.length; i++) {
            humanModels[i].updateMixer(delta);
        }

        picker.pick(pickPosition, raycastableObjs, camera);

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };

    const getCanvasRelativePosition = (event) => {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };
    };

    const setPickPosition = (event) => {
        const pos = getCanvasRelativePosition(event);
        pickPosition.x = (pos.x / canvas.clientWidth ) *  2 - 1;
        pickPosition.y = (pos.y / canvas.clientHeight) * -2 + 1;  // note we flip Y
    };

    const clearPickPosition = () => {
        pickPosition.x = -100000;
        pickPosition.y = -100000;
    };

    clearPickPosition();

    window.addEventListener('mousemove', setPickPosition);
    window.addEventListener('mouseout', clearPickPosition);
    window.addEventListener('mouseleave', clearPickPosition);
    requestAnimationFrame(render);
}

main();

