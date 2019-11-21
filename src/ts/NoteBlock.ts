import {BoxGeometry, Color, Mesh, MeshPhongMaterial} from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import {RGB_Linear_Shade} from "./RGB_Shade";
import {transpose} from "@tonaljs/tonal";
import {simplify} from "@tonaljs/note";
import {HumanModel} from "./HumanModel";
import {Synth, MembraneSynth, PolySynth, Transport} from "tone";

export class NoteBlock {
    static DEFAULT_NOTE = "C3";
    private object3d: Mesh;
    private originalPos : {x : number, y: number};
    private material: MeshPhongMaterial;
    private isClicked: boolean;
    private color: Color;
    private instrument: Synth | MembraneSynth | PolySynth;
    private enabled: boolean;
    private eventID: number;
    private timeIndex: number;
    private noteValueDOM: JQuery;
    private playTween: TWEEN.Tween;
    private note: string;
    private humanModel: HumanModel;

    constructor(color: Color, instrument : Synth | MembraneSynth | PolySynth, timeIndex: number, xPos : number, yPos : number, noteValueDOM : JQuery) {
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
        this.color = color;
        this.object3d.userData.hoverColor = color;
        this.instrument = instrument;
        this.enabled = false;
        this.eventID = null;
        this.timeIndex = timeIndex;
        this.noteValueDOM = noteValueDOM;
        this.playTween = new TWEEN.Tween(this.object3d.position)
            .to({y: this.originalPos.y - 1}, 150)
            .easing(TWEEN.Easing.Exponential.Out).chain(
                new TWEEN.Tween(this.object3d.position)
                    .to({y: this.originalPos.y}, 150)
                    .easing(TWEEN.Easing.Sinusoidal.Out)
            );

        this.note = NoteBlock.DEFAULT_NOTE;
        this.noteValueDOM.text(NoteBlock.DEFAULT_NOTE);
    }
    updateNote(deltaY : number, shouldPlay : boolean) {
        let newNote = deltaY > 0 ? "-2m" : "2m";
        newNote = simplify(transpose(this.note, newNote));
        this.note = newNote;
        this.noteValueDOM.text(newNote);

        if (shouldPlay) {
            this.oneshot(newNote);
        }

        // this.reschedule();
    }
    clearHoverTween() {
        if (this.object3d.userData.hoverTween) {
            TWEEN.remove(this.object3d.userData.hoverTween);
        }
    }
    assignHumanModel(humanModel : HumanModel) {
        this.humanModel = humanModel;
        humanModel.setColorTween(this.color);
    }
    getHumanModel() {
        return this.humanModel;
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
                const object3d = this.object3d;
                const material = (<MeshPhongMaterial>object3d.material);

                object3d.userData.hoverTween = new TWEEN.Tween(material.color)
                    .to({r: lightColor.r, g: lightColor.g, b: lightColor.b}, 300)
                    .easing(TWEEN.Easing.Cubic.Out).start();
            }
            this.showNoteValue();
        }
    }
    onHoverEnd() {
        if (!this.isClicked) {
            this.clearHoverTween();
            const object3d = this.object3d;
            const material = (<MeshPhongMaterial>object3d.material);

            this.object3d.userData.hoverTween = new TWEEN.Tween(material.color)
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
    onScroll(deltaY: number) {
        this.updateNote(deltaY, Transport.state !== "started");
    }
    toggleOn() {
        (<MeshPhongMaterial>this.object3d.material).color.copy(this.object3d.userData.hoverColor);

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
        this.object3d.userData.hoverTween = new TWEEN.Tween((<MeshPhongMaterial>this.object3d.material).color)
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
    oneshot(note : string, duration : string = "32n" ) {
        this.instrument.triggerAttackRelease(note, duration);
        this.playTween.stop();
        this.playTween.start();
    }
    scheduleCallback(time : number) {
        this.instrument.triggerAttackRelease(this.note, "32n", time);
        this.playTween.stop();
        this.playTween.start();
        this.humanModel.flashColor();
    }
    schedule(note : string = null) {
        if (note !== null) {
            this.note = note;
        }

        this.clear();

        const noteBlock = this;
        this.eventID = Transport.schedule(function(time : number) {
            noteBlock.scheduleCallback(time);
        }, "0:0:" + this.timeIndex);
    }
    reschedule() {
        if (this.eventID !== null) {
            this.clear();
            this.schedule();
        }
    }
    clear() {
        if (this.eventID !== null) {
            Transport.clear(this.eventID);
            this.eventID = null;
        }
    }
    getObject3D() {
        return this.object3d;
    }
}