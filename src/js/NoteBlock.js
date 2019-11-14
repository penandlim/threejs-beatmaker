import { BoxGeometry, MeshPhongMaterial, Mesh } from 'three/build/three.module';
import TWEEN from '@tweenjs/tween.js';
import {RGB_Linear_Shade, RGB_Log_Shade} from "./RGB_Shade";
import Tone from "tone";


export class NoteBlock {
    constructor(color, instrument, timeIndex, xPos, yPos, noteValueDOM) {
        const geometry = new BoxGeometry( 3, 0.7, 2 );
        geometry.translate(0, -0.35, 0);
        const material = new MeshPhongMaterial( {color: 0xffffff } );
        this.object3d = new Mesh( geometry, material );
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
        this.noteValueDOM = noteValueDOM;
        this.playTween = new TWEEN.Tween(this.object3d.position)
            .to({y: [this.originalPos.y, this.originalPos.y - 1, this.originalPos.y]}, 300)
            .easing(TWEEN.Easing.Cubic.Out);
    }
    clearHoverTween() {
        if (this.object3d.userData.hoverTween) {
            TWEEN.remove(this.object3d.userData.hoverTween);
        }
    }
    showNoteValue() {
        this.noteValueDOM.addClass("show-note");
    }
    hideNoteValue() {
        this.noteValueDOM.removeClass("show-note");
    }
    onHoverStart() {
        if (!this.isClicked) {
            this.clearHoverTween();
            if (this.object3d.userData.hoverColor) {
                const lightColor = RGB_Linear_Shade(0.2, this.object3d.userData.hoverColor);
                const oldColor = this.object3d.material.color;
                const object3d = this.object3d;
                object3d.userData.hoverTween = new TWEEN.Tween(object3d.material.color)
                    .to({r: lightColor.r, g: lightColor.g, b: lightColor.b}, 300)
                    .easing(TWEEN.Easing.Cubic.Out).start();
            }
            this.showNoteValue();
        }
    }
    onHoverEnd() {
        if (!this.isClicked) {
            this.clearHoverTween();

            const oldColor = this.object3d.material.color;
            const object3d = this.object3d;

            this.object3d.userData.hoverTween = new TWEEN.Tween(object3d.material.color)
                .to({r: 1, g: 1, b: 1 }, 300)
                .easing(TWEEN.Easing.Cubic.Out).start();

            this.hideNoteValue();
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
        this.showNoteValue();
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
        this.hideNoteValue();
    }
    oneshot(note, duration = "16n") {
        this.instrument.triggerAttackRelease(note, duration);
        this.playTween.stop();
        this.playTween.start();
    }
    scheduleCallback(time) {
        this.instrument.triggerAttackRelease(this.note, "16n", time);
        this.playTween.stop();
        this.playTween.start();
    }
    schedule(note = null) {
        if (note !== null) {
            this.note = note;
        }

        this.clear();

        const noteBlock = this;
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