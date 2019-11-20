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
                PickHelper.mouseOut(previouslyHoveredObj);
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
                PickHelper.mouseIn(this.hoveredObject);
            }
        } else {
            this.hoveredObject = null;
        }
        return this.hoveredObject;
    }
    static mouseIn(obj) {
        if (obj !== null && obj.userData.classObject) {
            obj.userData.classObject.onHoverStart();
            body.addClass("pointer");
        }
    }
    static mouseOut(obj) {
        if (obj !== null && obj.userData.classObject) {
            obj.userData.classObject.onHoverEnd();
            body.removeClass("pointer");
        }
    }
    execute() {
        if (this.hoveredObject !== null && this.hoveredObject.userData.classObject) {
            this.hoveredObject.userData.classObject.onClick();
        }
    }
    scroll(deltaY) {
        if (this.hoveredObject !== null && this.hoveredObject.userData.classObject) {
            this.hoveredObject.userData.classObject.onScroll(deltaY);
        }
    }
}