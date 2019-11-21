import { NoteBlock } from "./NoteBlock";
import {Synth, MembraneSynth, PolySynth, Transport} from "tone";
import {BoxGeometry, Color, Mesh, MeshPhongMaterial, Object3D, Scene} from "three";
import * as $ from "jquery";

export class NoteBlockArray {
    private instrumentArray: (Synth | MembraneSynth | PolySynth)[];
    public readonly xSize: number;
    public readonly ySize: number;
    private readonly xGap: number;
    private yGap: number;
    private beatsPerMeasure: number;
    length: number;
    private noteColorArray: Color[];
    private innerArray: NoteBlock[];

    constructor(xSize : number, ySize : number , xPos : number, yPos : number, xGap : number, yGap : number, beatsPerMeasure : number) {
        this.xSize = xSize;
        this.ySize = ySize;
        this.xGap = xGap;
        this.yGap = yGap;
        this.beatsPerMeasure = beatsPerMeasure;
        this.length =  xSize * ySize;
        this.innerArray = new Array(this.length);
        this.noteColorArray = [
            new Color(0xC96C35),
            new Color(0xE9B027),
            new Color(0xED3825),
            new Color(0x2C7073),
            new Color(0x85B795),
            new Color(0xDBD279),
        ];
        this.instrumentArray = [
            new PolySynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination(),
            new MembraneSynth({volume: -6}).toDestination()
        ];
        const notes = $(".note");
        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                let totalIndex = i * this.xSize + j;
                this.innerArray[totalIndex] = new NoteBlock(this.noteColorArray[i], this.instrumentArray[i], j, xPos + xGap * j, yPos + yGap * i, notes.eq(totalIndex));
            }
        }
        Transport.loopEnd = '1m';
        Transport.loop = true;
    }

    get(index : number) {
        return this.innerArray[index];
    }

    get2d(x : number, y : number) {
        return this.innerArray[y * this.xSize + x];
    }

    addToScene(scene : Scene, raycastableObjs : Object3D[]) {
        const geometry = new BoxGeometry( 0.5, 1, 2 );
        geometry.translate(0, -0.25, 0);
        const material = new MeshPhongMaterial( {color: 0x333333 } );
        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                const noteBlock = this.innerArray[i * this.xSize + j];
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
}