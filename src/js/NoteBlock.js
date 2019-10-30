import * as THREE from 'three/build/three.module';
import TWEEN from '@tweenjs/tween.js';
import {RGB_Linear_Shade, RGB_Log_Shade} from "./RGB_Shade";
import Tone from "tone";


export class NoteBlock {
    constructor(color, instrument, timeIndex, xPos, yPos) {
        let geometry = new THREE.BoxGeometry( 3, 0.7, 2 );
        geometry.translate(0, -0.35, 0);
        let material = new THREE.MeshPhongMaterial( {color: 0xffffff } );
        this.object3d = new THREE.Mesh( geometry, material );
        this.object3d.position.x = xPos;
        this.originalPos = {x : xPos, y: yPos};
        this.object3d.position.y = yPos;
        this.object3d.receiveShadow = true;
        this.object3d.userData.classObject = this;
        this.material = material;
        this.isClicked = false;
        this.object3d.userData.hoverColor = color;
        this.instrument = instrument;
        this.note = "C4";
        this.enabled = false;
        this.eventID = null;
        this.timeIndex = timeIndex;
    }
    clearHoverTween() {
        if (this.object3d.userData.hoverTween) {
            TWEEN.remove(this.object3d.userData.hoverTween);
        }
    }
    onHoverStart() {
        if (!this.isClicked) {
            this.clearHoverTween();
            if (this.object3d.userData.hoverColor) {
                let lightColor = RGB_Linear_Shade(0.2, this.object3d.userData.hoverColor);
                let oldColor = this.object3d.material.color;
                let object3d = this.object3d;
                object3d.userData.hoverTween = new TWEEN.Tween(object3d.material.color)
                    .to({r: lightColor.r, g: lightColor.g, b: lightColor.b}, 300)
                    .easing(TWEEN.Easing.Cubic.Out).start();
            }
        }
    }
    onHoverEnd() {
        if (!this.isClicked) {
            this.clearHoverTween();

            let oldColor = this.object3d.material.color;
            let object3d = this.object3d;

            let thingsToTween = {r: oldColor.r, g: oldColor.g, b:oldColor.b, scaleY: object3d.scale.y};

            this.object3d.userData.hoverTween = new TWEEN.Tween(object3d.material.color)
                .to({r: 1, g: 1, b: 1 }, 300)
                .easing(TWEEN.Easing.Cubic.Out).start();
        }
    }
    onClick() {
        this.clearHoverTween();
        if (this.isClicked) {
            this.toggleOff();
        } else {
            this.toggleOn();
        }
    }
    toggleOn() {
        this.object3d.material.color.copy(this.object3d.userData.hoverColor);

        this.object3d.userData.tween = new TWEEN.Tween(this.object3d.scale)
            .to({ y: [0.5, 1.5] }, 300)
            .easing(TWEEN.Easing.Back.Out).start();

        this.isClicked = true;
        this.enabled = true;
        this.schedule();
        this.oneshot(this.note);
    }
    toggleOff() {
        this.object3d.userData.hoverTween = new TWEEN.Tween(this.object3d.material.color)
            .to({ r: 1, g: 1, b: 1 }, 300)
            .easing(TWEEN.Easing.Cubic.Out).start();

        this.object3d.userData.tween = new TWEEN.Tween(this.object3d.scale)
            .to({ y: 1 }, 300)
            .easing(TWEEN.Easing.Back.Out).start();

        this.isClicked = false;
        this.enabled = false;
        this.clear();
    }
    oneshot(note, duration = "16n") {
        this.instrument.triggerAttackRelease(note, duration);
    }
    scheduleCallback(time) {
        this.instrument.triggerAttackRelease(this.note, "16n", time);
        new TWEEN.Tween(this.object3d.position)
            .to({y: [this.originalPos.y, this.originalPos.y - 1, this.originalPos.y]}, 300)
            .easing(TWEEN.Easing.Cubic.Out)
            .start();
    }
    schedule(note = null) {
        if (note !== null) {
            this.note = note;
        }

        this.clear();

        let noteBlock = this;
        this.eventID = Tone.Transport.schedule(function(time) {
            noteBlock.scheduleCallback(time);
        }, "0:0:" + this.timeIndex);
    }
    clear() {
        if (this.eventID !== null) {
            Tone.Transport.clear(this.eventID);
            this.eventID = null;
        }
    }
}