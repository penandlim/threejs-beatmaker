import * as $ from "jquery";
import {
    AmbientLight,
    Clock,
    Color, DirectionalLight, DoubleSide, HemisphereLight, Mesh, MeshPhongMaterial, NearestFilter,
    OrthographicCamera,
    PCFSoftShadowMap, PlaneBufferGeometry,
    RepeatWrapping,
    Scene,
    TextureLoader, Math as ThreeMath,
    Vector3,
    WebGLRenderer, Box3, Renderer
} from 'three';
import {PickHelper} from "./PickHelper";
import {TrackManager} from "./TrackManager";
import {cloneGltf} from "./three-clone-gltf";
import {HumanModel} from "./HumanModel";
import * as Tone from "tone";
import * as TWEEN from "@tweenjs/tween.js";
import {GLTF, GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {Object3D, PerspectiveCamera} from "three";
import {StorageSystem} from "./StorageSystem";

const jqueryWindow = $(window);

export function main() {
    const canvas = <HTMLCanvasElement>document.querySelector('#threejs');
    const renderer = new WebGLRenderer({canvas, antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    const fov = 45;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    //const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    const width = 16 * 5;
    const height = 9 * 5;

    const camera = new OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
    camera.position.set(-20, 25, 45);
    camera.lookAt(new Vector3(0, 15 , 0));

    let nextCamPos = new Vector3(0,0,0);
    let nextCamRot = new Vector3(0,0,0);

    const scene = new Scene();
    scene.add(camera);
    (window as any).scene = scene;
    scene.background = new Color('gray');

    const clock = new Clock();

    const humanModels : HumanModel[] = [];
    const raycastableObjs : Object3D[] = [];
    (window as any).humanModels = humanModels;

    const picker = new PickHelper();
    const pickPosition = {x: 0, y: 0};

    const trackManager = new TrackManager(16, 6, -25, -0.25, 3.5, 6, 4);
    StorageSystem.instance = new StorageSystem(trackManager.length, trackManager.ySize);
    trackManager.loadAllNotes(StorageSystem.instance.readAllNotes());
    (window as any).trackManager = trackManager;

    let then = 0;

    // {
    //     const planeSize = 40;
    //
    //     const loader = new TextureLoader();
    //     const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    //     texture.wrapS = RepeatWrapping;
    //     texture.wrapT = RepeatWrapping;
    //     texture.magFilter = NearestFilter;
    //     const repeats = planeSize / 2;
    //     texture.repeat.set(repeats, repeats);
    //
    //     const planeGeo = new PlaneBufferGeometry(planeSize, planeSize);
    //     const planeMat = new MeshPhongMaterial({
    //         map: texture,
    //         side: DoubleSide,
    //     });
    //     const mesh = new Mesh(planeGeo, planeMat);
    //     mesh.name = "Ground";
    //     mesh.receiveShadow = true;
    //     mesh.rotation.x = Math.PI * -.5;
    //     // scene.add(mesh);
    // }

    {
        const skyColor = 0xB1E1FF;  // light blue
        const groundColor = 0xB97A20;  // brownish orange
        const intensity = 0.5;
        const light = new HemisphereLight(skyColor, groundColor, intensity);
        light.name = "HemisphereLight";
        scene.add(light);
    }

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new DirectionalLight(color, intensity);
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
        const light = new AmbientLight(color, intensity);
        light.position.set(5, 10, 2);
        light.name = "AmbientLight";
        scene.add(light);
    }

    const frameArea = (sizeToFitOnScreen : number, boxSize : number, boxCenter : Vector3, camera : PerspectiveCamera) => {
        const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
        const halfFovY = ThreeMath.degToRad(camera.fov * .5);
        const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
        // compute a unit vector that points in the direction the camera is now
        // in the xz plane from the center of the box
        const direction = (new Vector3())
            .subVectors(camera.position, boxCenter)
            .multiply(new Vector3(1, 0, 1))
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
        gltfLoader.load('models/everything-trimmed.glb', (gltf : GLTF) => {

            // Generate Character models
            for (let i = 0; i < 6; i++) {

                if (i !== 0) {
                    gltf = <GLTF>cloneGltf(gltf);
                }
                const clonedHumanModel = new HumanModel(gltf);
                clonedHumanModel.getObject3D().name = "Character " + i;
                humanModels.push(clonedHumanModel);
                raycastableObjs.push(clonedHumanModel.getObject3D().children[1]);
                for (let j = 0; j < trackManager.xSize; j++) {
                    trackManager.get2d(j, i).assignHumanModel(clonedHumanModel);
                }
            }

            // Apply modifications to characters
            for (let i = 0; i < humanModels.length; i++) {
                const humanModel = humanModels[i];
                humanModel.transitionAnimTo(i + 5);
                const humanModelObject3D = humanModel.getObject3D();
                humanModelObject3D.position.x = -30;
                humanModelObject3D.position.y = i * 6 - 0.2;
                humanModelObject3D.rotateZ(-1.5708);
                scene.add(humanModelObject3D);
            }

            // compute the box that contains all the stuff
            // from root and below
            const box = new Box3().setFromObject(humanModels[0].getObject3D());
            const boxSize = box.getSize(new Vector3()).length();
            const boxCenter = box.getCenter(new Vector3());

            // set the camera to frame the box
            //frameArea(boxSize, boxSize, boxCenter, camera);
        });

        trackManager.addToScene(scene, raycastableObjs);
    }

    const resizeRendererToDisplaySize = (renderer : Renderer) => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    };

    const render = (now : number) => {
        now *= 0.001;  // convert to seconds
        const deltaTime = now - then;
        then = now;
        const delta = clock.getDelta();

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            if (camera instanceof PerspectiveCamera) {
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
            }
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

    const getCanvasRelativePosition = (event : JQuery.TouchEventBase | JQuery.MouseEventBase) => {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;

        if ('clientX' in event.originalEvent) {
            clientX = event.originalEvent.clientX;
            clientY = event.originalEvent.clientY;
        }
        else if ('touches' in event.originalEvent) {
            clientX = event.originalEvent.touches[0].pageX;
            clientY = event.originalEvent.touches[0].pageY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top,
        };

    };

    const setPickPosition = (event : JQuery.MouseEventBase | JQuery.TouchEventBase) => {
        const pos = getCanvasRelativePosition(event);
        pickPosition.x = (pos.x / canvas.clientWidth ) *  2 - 1;
        pickPosition.y = (pos.y / canvas.clientHeight) * -2 + 1;  // note we flip Y
    };

    const clearPickPosition = () => {
        pickPosition.x = -100000;
        pickPosition.y = -100000;
    };

    const executePickPosition = (event : JQuery.ClickEvent | JQuery.TouchEventBase) => {
        setPickPosition(event);
        picker.pick(pickPosition, raycastableObjs, camera);
        picker.execute();
    };

    const onMouseWheel = (event : any) => {
        setPickPosition(event);
        picker.pick(pickPosition, raycastableObjs, camera);
        picker.scroll(event.originalEvent.deltaY);
    };

    jqueryWindow.on('mousemove', setPickPosition);
    jqueryWindow.on('mouseout', clearPickPosition);
    jqueryWindow.on('mouseleave', clearPickPosition);
    jqueryWindow.on("click", executePickPosition);
    jqueryWindow.on('wheel', onMouseWheel);

    requestAnimationFrame(render);
}