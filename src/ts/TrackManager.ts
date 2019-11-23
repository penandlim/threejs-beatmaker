import { NoteBlock } from "./NoteBlock";
import {Synth, MembraneSynth, PolySynth, Transport, SynthOptions} from "tone";
import {BoxGeometry, Color, Mesh, MeshPhongMaterial, Object3D, Scene} from "three";
import * as $ from "jquery";
import {Track} from "./Track";
import {StorageSystem } from "./StorageSystem";
import {Instrument} from "tone/build/esm/instrument/Instrument";

const colorHexArray: number[] = [
    0xC96C35,
    0xE9B027,
    0xED3825,
    0x2C7073,
    0x85B795,
    0xDBD279,
];

export class TrackManager {
    private instrumentArray: (Instrument<any>)[];
    public readonly xSize: number;
    public readonly ySize: number;
    private readonly xGap: number;
    private yGap: number;
    private beatsPerMeasure: number;
    length: number;
    private tracks: Track[] = [];
    static Instance : TrackManager = null;

    constructor(xSize : number, ySize : number , xPos : number, yPos : number, xGap : number, yGap : number, beatsPerMeasure : number) {
        this.xSize = xSize;
        this.ySize = ySize;
        this.xGap = xGap;
        this.yGap = yGap;
        this.beatsPerMeasure = beatsPerMeasure;
        this.length =  xSize * ySize;
        this.instrumentArray = [
            new PolySynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination()
        ];
        TrackManager.Instance = this;
        const notes = $(".note");
        for (let i = 0; i < this.ySize; i++) {
            this.tracks.push(new Track(this.instrumentArray[i], colorHexArray[i]));
            for (let j = 0; j < this.xSize; j++) {
                let totalIndex = i * this.xSize + j;
                this.tracks[i].addNoteBlock(new NoteBlock(this.tracks[i], i, j, xPos + xGap * j, yPos + yGap * i, notes.eq(totalIndex)));
            }
        }
        Transport.loopEnd = '1m';
        Transport.loop = true;

    }

    getTrack(index : number) {
        return this.tracks[index];
    }

    get(index : number) {
        return this.get2d(index % this.xSize, Math.floor(index / this.xSize));
    }

    get2d(x : number, y : number) : NoteBlock {
        return this.tracks[y].getNoteBlock(x);
    }

    addToScene(scene : Scene, raycastableObjs : Object3D[]) {
        const geometry = new BoxGeometry( 0.5, 1, 2 );
        geometry.translate(0, -0.25, 0);
        const material = new MeshPhongMaterial( {color: 0x333333 } );
        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                const noteBlock = this.get(j + i * this.xSize);
                const noteBlockObj = noteBlock.getObject3D();
                raycastableObjs.push(noteBlockObj);
                scene.add(noteBlockObj);

                if ((j + 1) % this.beatsPerMeasure === 0) {
                    const measureBar = new Mesh( geometry, material );
                    measureBar.receiveShadow = true;
                    measureBar.position.x = noteBlockObj.position.x + this.xGap / 2;
                    measureBar.position.y = noteBlockObj.position.y;
                    measureBar.position.z = noteBlockObj.position.z;
                    scene.add(measureBar);
                } else if (j === 0) {
                    const measureBar = new Mesh( geometry, material );
                    measureBar.receiveShadow = true;
                    measureBar.position.x = noteBlockObj.position.x - this.xGap / 2;
                    measureBar.position.y = noteBlockObj.position.y;
                    measureBar.position.z = noteBlockObj.position.z;
                    scene.add(measureBar);
                }
            }
        }
    }

    play() {
        Transport.start();
    }
    pause() {
        Transport.pause();
    }
    stop() {
        Transport.stop();
    }

    loadAllNotes(notesArr : string[]) {
        const trackManager = this;
        notesArr.forEach(function (value, index, array) {
            if (value) {
                trackManager.get(index).load(value);
            }
        });
    }

    loadAllTracks(trackArr : SynthOptions[]) {
        trackArr.forEach(function(value : SynthOptions, index, array) {
            if (value) {
                TrackManager.Instance.getTrack(index).load(value);
            }
        });
    }

    saveAllTracks() {
        if (StorageSystem.instance !== null) {
            StorageSystem.instance.writeTracksData(this.getAllTrackOptions());
        }
    }

    getAllTrackOptions() : SynthOptions[] {
        const arr : SynthOptions[] = [];
        this.tracks.forEach((value, index, array) => {
            arr.push(value.instrument.get());
        });
        return arr;
    }
}