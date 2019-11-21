// PickHelper class for detecting raycast from the mouse.
import {Object3D, Raycaster, Camera} from "three";
import * as $ from "jquery";

const body = $(document.body);

export class PickHelper {
    private raycaster: Raycaster;
    private hoveredObject: Object3D;
    private readonly mouseOverArray: Object3D[];
    private canvasEl: JQuery;
    constructor() {
        this.raycaster = new Raycaster();
        this.hoveredObject = null;
        this.mouseOverArray = [];
        this.canvasEl = $("#threejs");
    }
    pick(normalizedPosition : {x: number, y: number}, objs : Object3D[], camera : Camera) {
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
    static mouseIn(obj : Object3D) {
        if (obj !== null && obj.userData.classObject) {
            obj.userData.classObject.onHoverStart();
            body.addClass("pointer");
        }
    }
    static mouseOut(obj : Object3D) {
        if (obj !== null && obj.userData.classObject) {
            obj.userData.classObject.onHoverEnd();
            body.removeClass("pointer");
        }
    }
    execute() {
        if (this.hoveredObject !== null && this.hoveredObject.userData.classObject) {
            this.hoveredObject.userData.classObject.onClick();
            return true;
        }
        return false;
    }
    scroll(deltaY : number) {
        if (this.hoveredObject !== null && this.hoveredObject.userData.classObject) {
            this.hoveredObject.userData.classObject.onScroll(deltaY);
            return true;
        }
        return false;
    }
}