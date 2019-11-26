import {BoxGeometry, Color, Mesh, MeshPhongMaterial} from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import {RGB_Linear_Shade} from "../js/RGB_Shade";
import {transpose} from "@tonaljs/tonal";
import {simplify} from "@tonaljs/note";
import {HumanModel} from "./HumanModel";
import {Synth, MembraneSynth, PolySynth, Transport} from "tone";
import {Track} from "./Track";
import {Instrument} from "tone/build/esm/instrument/Instrument";
import {StorageSystem} from "./StorageSystem";
import {TrackManager} from "./TrackManager";


export class NoteBlock {
    static DEFAULT_NOTE = "C3";
    static readonly GEOMETRY = new BoxGeometry( 3, 0.7, 2 );
    private readonly object3d: Mesh;
    private originalPos : {x : number, y: number};
    private material: MeshPhongMaterial;
    private isClicked: boolean;
    private color: Color;
    private enabled: boolean;
    private eventID: number;
    private readonly timeIndex: number;
    private noteValueDOM: JQuery;
    private playTween: TWEEN.Tween;
    private note: string;
    private humanModel: HumanModel;
    private track: Track;
    private trackIndex: number;
    private noteIndex: number;

    constructor(track: Track, trackIndex:number, timeIndex: number, xPos : number, yPos : number, noteValueDOM : JQuery) {
        const material = new MeshPhongMaterial( {color: 0xffffff } );
        this.object3d = new Mesh( NoteBlock.GEOMETRY, material );
        this.object3d.position.x = xPos;
        this.originalPos = {x : xPos, y: yPos};
        this.object3d.position.y = yPos;
        this.object3d.receiveShadow = true;
        this.object3d.userData.classObject = this;
        this.material = material;
        this.isClicked = false;
        this.setTrack(track);
        this.enabled = false;
        this.eventID = null;
        this.timeIndex = timeIndex;
        this.trackIndex = trackIndex;
        this.noteIndex = TrackManager.Instance.xSize * this.trackIndex + this.timeIndex;
        this.noteValueDOM = noteValueDOM;
        this.playTween = new TWEEN.Tween(this.object3d.position)
            .to({y: this.originalPos.y - 1}, 150)
            .easing(TWEEN.Easing.Exponential.Out).chain(
                new TWEEN.Tween(this.object3d.position)
                    .to({y: this.originalPos.y}, 150)
                    .easing(TWEEN.Easing.Sinusoidal.Out)
            );

        this.setNote(NoteBlock.DEFAULT_NOTE);
    }
    setNote(note : string) {
        this.note = note;
        this.noteValueDOM.text(note);
    }
    updateNote(deltaY : number, shouldPlay : boolean) {
        let newNote = deltaY > 0 ? "-2m" : "2m";
        newNote = simplify(transpose(this.note, newNote));
        if (newNote.includes("0"))
            return;
        this.setNote(newNote);

        if (shouldPlay) {
            this.oneshot(newNote);
        }

        if (this.eventID !== null) {
            StorageSystem.instance.writeNoteData(this.noteIndex, this.note);
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
    toggleOn(shouldPlay : boolean = true) {
        (<MeshPhongMaterial>this.object3d.material).color.copy(this.object3d.userData.hoverColor);

        this.object3d.userData.tween = new TWEEN.Tween(this.object3d.scale)
            .to({ y: [0.5, 1.5] }, 300)
            .easing(TWEEN.Easing.Back.Out).start();

        this.isClicked = true;
        this.enabled = true;
        this.schedule();
        if (shouldPlay)
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
        if (this.hasTrack())
            this.getInstrument().triggerAttackRelease(note, duration);
        this.playTween.stop();
        this.playTween.start();
    }
    scheduleCallback(time : number) {
        if (this.hasTrack())
            this.getInstrument().triggerAttackRelease(this.note, "32n", time);
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
        StorageSystem.instance.writeNoteData(this.noteIndex, this.note);
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
            StorageSystem.instance.writeNoteData(this.noteIndex, null);
        }
    }
    getObject3D() {
        return this.object3d;
    }
    public setTrack(track: Track) {
        this.track = track;
        this.color = track.color;
        this.object3d.userData.hoverColor = track.color;
    }
    hasTrack() : boolean {
        return this.track !== null;
    }
    getInstrument() : Instrument<any> {
        return this.track.instrument;
    }
    load(note : string) {
        this.setNote(note);
        this.toggleOn(false);
    }
}

NoteBlock.GEOMETRY.translate(0, -0.35, 0);