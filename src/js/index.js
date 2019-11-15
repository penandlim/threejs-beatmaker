import * as THREE from 'three/build/three.module';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import TWEEN from '@tweenjs/tween.js';
import $ from 'jquery';
import { PickHelper } from "./PickHelper";
import { HumanModel } from "./HumanModel";
import { cloneGltf } from "./three-clone-gltf";
import { NoteBlockArray } from "./NoteBlockArray";
// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import Tone from "tone";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App.jsx";
import 'bootstrap';
import Snap from "snapsvg-cjs";

window.THREE = THREE;
window.Tone = Tone;

const jqueryWindow = $(window);

function main() {
    const canvas = document.querySelector('#threejs');
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const fov = 45;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    //const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    const width = 16 * 5;
    const height = 9 * 5;

    const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
    camera.position.set(-20, 25, 45);
    camera.lookAt(new THREE.Vector3(0, 15 , 0));

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

    const noteBlockArray = new NoteBlockArray(16, 6, -25, -0.25, 3.5, 6, 4);
    window.noteBlockArray = noteBlockArray;

    let then = 0;

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
        // scene.add(mesh);
    }

    {
        const skyColor = 0xB1E1FF;  // light blue
        const groundColor = 0xB97A20;  // brownish orange
        const intensity = 0.5;
        const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
        light.name = "HemisphereLight";
        scene.add(light);
    }

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.shadow.mapSize.width = 512;  // default
        light.shadow.mapSize.height = 512;
        light.position.set(25, 50, 10);
        light.castShadow = true;
        light.name = "DirectionalLight";
        scene.add(light);
        scene.add(light.target);

        light.shadow.camera.left = -15;
        light.shadow.camera.right = 15;
        light.shadow.camera.top = 50;
        light.shadow.camera.bottom = -50;


        //var helper = new THREE.CameraHelper( light.shadow.camera );
        //scene.add( helper );
    }

    {
        const color = 0xFFFFFF;
        const intensity = 0.1;
        const light = new THREE.AmbientLight(color, intensity);
        light.position.set(5, 10, 2);
        light.name = "AmbientLight";
        scene.add(light);
    }

    const frameArea = (sizeToFitOnScreen, boxSize, boxCenter, camera) => {
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
    };

    {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('models/everything-trimmed.glb', (gltf) => {

            // Generate Character models
            for (let i = 0; i < 6; i++) {
                if (i !== 0) {
                    gltf = cloneGltf(gltf);
                }
                const clonedHumanModel = new HumanModel(gltf.scene.children[0], gltf.animations);
                clonedHumanModel.object3d.name = "Character " + i;
                humanModels.push(clonedHumanModel);
                raycastableObjs.push(clonedHumanModel.object3d.children[1]);
                for (let j = 0; j < noteBlockArray.xSize; j++) {
                    noteBlockArray.get2d(j, i).assignHumanModel(clonedHumanModel);
                }
            }

            // Apply modifications to characters
            for (let i = 0; i < humanModels.length; i++) {
                const humanModel = humanModels[i];
                humanModel.transitionAnimTo(i + 5);
                humanModel.object3d.position.x = -30;
                humanModel.object3d.position.y = i * 6 - 0.2;
                humanModel.object3d.rotateZ(-1.5708);
                scene.add(humanModel.object3d);
            }

            // compute the box that contains all the stuff
            // from root and below
            const box = new THREE.Box3().setFromObject(humanModels[0].object3d);
            const boxSize = box.getSize(new THREE.Vector3()).length();
            const boxCenter = box.getCenter(new THREE.Vector3());

            // set the camera to frame the box
            //frameArea(boxSize, boxSize, boxCenter, camera);
        });

        noteBlockArray.addToScene(scene, raycastableObjs);
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

    const render = (now) => {
        now *= 0.001;  // convert to seconds
        const deltaTime = now - then;
        then = now;
        const delta = clock.getDelta();

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            // composer.setSize(canvas.width, canvas.height);
        }

        // Update the animation mixer, the stats panel, and render this frame
        const progress = Tone.Transport.progress;
        for (let i = 0; i < humanModels.length; i++) {
            humanModels[i].updateMixer(delta);
            humanModels[i].updateXPos(-30, 28, progress , delta);
        }

        picker.pick(pickPosition, raycastableObjs, camera);
        // composer.render(delta);
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        TWEEN.update();
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

    const executePickPosition = (event) => {
        setPickPosition(event);
        picker.pick(pickPosition, raycastableObjs, camera);
        picker.execute()
    };

    const onMouseWheel = (event) => {
        console.log(event.originalEvent.deltaY);
    };

    jqueryWindow.on('mousemove', setPickPosition);
    jqueryWindow.on('mouseout', clearPickPosition);
    jqueryWindow.on('mouseleave', clearPickPosition);
    jqueryWindow.on("click", executePickPosition);
    jqueryWindow.on('wheel', onMouseWheel);

    requestAnimationFrame(render);
}

ReactDOM.render(React.createElement(App, {xSize:16, ySize:6 } ), document.getElementById("container"), function() {
    main();
    const controlButton = $("#controlButton");

    const svg = document.getElementById("controlButtonSVG");
    const s = Snap(svg);
    const playPath = Snap.select("#playPath");
    const stopPath = Snap.select("#stopPath");
    const playPathPoints = playPath.node.getAttribute("d");
    const stopPathPoints = stopPath.node.getAttribute("d");

    controlButton.on("click", function() {
        if (Tone.Transport.state === Tone.State.Started) {
            playPath.animate({d : playPathPoints},300, mina.easeinout);
            Tone.Transport.stop();
        } else {
            playPath.animate({d : stopPathPoints},300, mina.backout);
            Tone.Transport.start();
        }
    });


});
