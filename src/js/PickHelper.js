// PickHelper class for detecting raycast from the mouse.

import * as THREE from 'three/build/three.module';
import $ from "jquery";

const body = $(document.body);

export class PickHelper {
    constructor() {
        this.raycaster = new THREE.Raycaster();
        this.hoveredObject = null;
        this.pickedObjectSavedColor = 0;
        this.mouseOverArray = [];
        this.canvasEl = $("#threejs");
    }
    pick(normalizedPosition, objs, camera, time) {
        this.raycaster.setFromCamera(normalizedPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(objs);

        for (let i = 0; i < this.mouseOverArray.length; i++) {
            const previouslyHoveredObj = this.mouseOverArray[i];
            // Should trigger mouseOut
            if ((intersectedObjects.length && previouslyHoveredObj !== intersectedObjects[0].object) || intersectedObjects.length === 0) {
                this.mouseOverArray.splice(i, 1);
                i--;
                this.mouseOut(previouslyHoveredObj);
            }
        }

        // Something was intersected
        if (intersectedObjects.length) {
            // pick the first object. It's the closest one
            this.hoveredObject = intersectedObjects[0].object;

            if (this.mouseOverArray.includes(this.hoveredObject)) {
                // Was hovered last frame.
                // Don't need to do anything else

            } else {
                // First time the object was hovered.
                // Trigger mouseIn
                this.mouseOverArray.push(this.hoveredObject);
                this.mouseIn(this.hoveredObject);
            }
            return this.hoveredObject;
        } else {
            this.hoveredObject = null;
        }
    }
    mouseIn(obj) {
        if (obj.userData.classObject) {
            obj.userData.classObject.onHoverStart();
            body.addClass("pointer");
        }
    }
    mouseOut(obj) {
        if (obj.userData.classObject) {
            obj.userData.classObject.onHoverEnd();
            body.removeClass("pointer");
        }
    }
    execute() {
        if ( this.hoveredObject !== null ) {
            if (this.hoveredObject.userData.classObject) {
                this.hoveredObject.userData.classObject.onClick();
            }
        }
    }
}

/** Gives the aptitude for an object3D to clone recursively with its material cloned (normal clone does not clone material)*/
THREE.Object3D.prototype.GdeepCloneMaterials = function() {
    const object = this.clone( new THREE.Object3D(), false );

    for ( let i = 0; i < this.children.length; i++ ) {

        const child = this.children[ i ];
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