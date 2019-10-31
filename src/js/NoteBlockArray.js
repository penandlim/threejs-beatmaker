import { NoteBlock } from "./NoteBlock";
import Tone from "tone";
import { Color } from "three";
import $ from "jquery";

export class NoteBlockArray {

    constructor(xSize, ySize , xPos, yPos, xGap, yGap, beatsPerMeasure) {
        this.xSize = xSize;
        this.ySize = ySize;
        this.xGap = xGap;
        this.yGap = yGap;
        this.beatsPerMeasure = beatsPerMeasure;
        this.length =  xSize*ySize;
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
            new Tone.PolySynth().toMaster(),
            new Tone.MembraneSynth().toMaster(),
            new Tone.MembraneSynth().toMaster(),
            new Tone.MembraneSynth().toMaster(),
            new Tone.MembraneSynth().toMaster(),
            new Tone.MembraneSynth().toMaster()
        ];
        const notes = $(".note");
        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                let totalIndex = i * this.xSize + j;
                this.innerArray[totalIndex] = new NoteBlock(this.noteColorArray[i], this.instrumentArray[i], j, xPos + xGap * j, yPos + yGap * i, notes.eq(totalIndex));
            }
        }
        Tone.Transport.loopEnd = '1m';
        Tone.Transport.loop = true;
    }

    get(index) {
        return this.innerArray[index];
    }

    get2d(x, y) {
        return this.innerArray[y * this.xSize + x];
    }

    addToScene(scene, raycastableObjs) {
        const geometry = new THREE.BoxGeometry( 0.5, 1, 2 );
        geometry.translate(0, -0.25, 0);
        const material = new THREE.MeshPhongMaterial( {color: 0x333333 } );
        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                const noteBlock = this.innerArray[i * this.xSize + j];
                raycastableObjs.push(noteBlock.object3d);
                scene.add(noteBlock.object3d);

                if ((j + 1) % this.beatsPerMeasure === 0) {
                    const measureBar = new THREE.Mesh( geometry, material );
                    measureBar.receiveShadow = true;
                    measureBar.position.x = noteBlock.object3d.position.x + this.xGap / 2;
                    measureBar.position.y = noteBlock.object3d.position.y;
                    measureBar.position.z = noteBlock.object3d.position.z;
                    scene.add(measureBar);
                } else if (j === 0) {
                    const measureBar = new THREE.Mesh( geometry, material );
                    measureBar.receiveShadow = true;
                    measureBar.position.x = noteBlock.object3d.position.x - this.xGap / 2;
                    measureBar.position.y = noteBlock.object3d.position.y;
                    measureBar.position.z = noteBlock.object3d.position.z;
                    scene.add(measureBar);
                }
            }
        }
    }

    play() {
        Tone.Transport.start();
    }
    pause() {
        Tone.Transport.pause();
    }
    stop() {
        Tone.Transport.stop();
    }
}