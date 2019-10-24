import * as THREE from 'three/build/three.module';
import TWEEN from 'three/examples/jsm/libs/tween.module.min';

export class HumanModel {
    constructor(character, animations) {
        console.log(character);
        this.animations = animations;
        this.object3d = character;
        this.object3d.children[1].material = new THREE.MeshPhongMaterial({ skinning: true, shading: THREE.FlatShading});
        this.material = this.object3d.children[1].material;
        this.mixer = new THREE.AnimationMixer( character );
        this.actions = [];

        this.head = this.object3d.getObjectByName("mixamorigHead");

        for (let i = 0; i < animations.length; i++) {
            this.actions.push(this.mixer.clipAction( animations[i] ));
        }

        this.actions[1].play();
        this.currentActionIndex = 0;
    }

    updateMixer(delta) {
        this.mixer.update(delta);
    }

    transitionAnimTo(index) {
        this.actions[index].enabled = true;
        this.actions[index].time = 0;
        this.actions[index].setEffectiveTimeScale(1);
        this.actions[index].setEffectiveWeight(1);
        this.actions[index].play();

        this.actions[this.currentActionIndex].crossFadeTo(this.actions[index], 1, true);
        this.currentActionIndex = index;
    }

    clone() {
        return new HumanModel(this.object3d.GdeepCloneMaterials(), this.animations)
    }
}

export class PickHelper {
    constructor() {
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
    }
    pick(normalizedPosition, objs, camera, time) {
        this.raycaster.setFromCamera(normalizedPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(objs);
        if (intersectedObjects.length) {
            // pick the first object. It's the closest one
            this.pickedObject = intersectedObjects[0].object;
            console.log(this.pickedObject);
            return this.pickedObject;
        }
    }
}



/** Gives the aptitude for an object3D to clone recursively with its material cloned (normal clone does not clone material)*/

THREE.Object3D.prototype.GdeepCloneMaterials = function() {
    let object = this.clone( new THREE.Object3D(), false );

    for ( let i = 0; i < this.children.length; i++ ) {

        let child = this.children[ i ];
        if ( child.GdeepCloneMaterials ) {
            object.add( child.GdeepCloneMaterials() );
        } else {
            object.add( child.clone() );
        }

    }
    return object;
};

THREE.Mesh.prototype.GdeepCloneMaterials = function( object, recursive ) {
    if ( object === undefined ) {
        object = new THREE.Mesh( this.geometry, this.material.clone() );
    }

    THREE.Object3D.prototype.GdeepCloneMaterials.call( this, object, recursive );
    return object;
};