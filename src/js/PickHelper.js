// PickHelper class for detecting raycast from the mouse.

import * as THREE from 'three/build/three.module';

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