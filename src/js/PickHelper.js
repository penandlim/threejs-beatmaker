// PickHelper class for detecting raycast from the mouse.

import * as THREE from 'three/build/three.module';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min';
import $ from "jquery";

export class PickHelper {
    constructor() {
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
        this.mouseOverArray = [];
        this.canvasEl = $("#threejs");
    }
    pick(normalizedPosition, objs, camera, time) {
        this.raycaster.setFromCamera(normalizedPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(objs);

        for (let i = 0; i < this.mouseOverArray.length; i++) {
            let previouslyHoveredObj = this.mouseOverArray[i];
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
            this.pickedObject = intersectedObjects[0].object;

            if (this.mouseOverArray.includes(this.pickedObject)) {
                // Was hovered last frame.
                // Don't need to do anything else

            } else {
                // First time the object was hovered.
                // Trigger mouseIn
                this.mouseOverArray.push(this.pickedObject);
                this.mouseIn(this.pickedObject);
            }
            return this.pickedObject;
        }
    }
    mouseIn(obj) {
        console.log("Mouse Hover Start on " + obj.id);

        if (obj.userData.tween) {
            TWEEN.remove(obj.userData.tween);
        }

        if (obj.userData.hoverColor) {
            let newColor = obj.userData.hoverColor;
            obj.userData.tween = new TWEEN.Tween(obj.material.color)
                .to({r: newColor.r, g: newColor.g, b: newColor.b}, 400)
                .easing(TWEEN.Easing.Cubic.Out).start();
        }


        this.canvasEl.addClass("pointer");
    }
    mouseOut(obj) {
        console.log("Mouse Hover End on " + obj.id);

        if (obj.userData.tween) {
            TWEEN.remove(obj.userData.tween);
        }

        obj.userData.tween = new TWEEN.Tween(obj.material.color)
            .to({r: 1, g: 1, b: 1}, 400)
            .easing(TWEEN.Easing.Cubic.Out).start();

        this.canvasEl.removeClass("pointer");
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