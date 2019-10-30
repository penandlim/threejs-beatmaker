import { NoteBlock } from "./NoteBlock";
import Tone from "tone";
import { Color } from "three";

export class NoteBlockArray {

    constructor(xSize, ySize , xPos, yPos, xGap, yGap) {
        this.xSize = xSize;
        this.ySize = ySize;
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
        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                this.innerArray[i * this.xSize + j] = new NoteBlock(this.noteColorArray[i], this.instrumentArray[i], j, xPos + xGap * j, yPos + yGap * i);
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
        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                let noteBlock = this.innerArray[i * this.xSize + j];
                raycastableObjs.push(noteBlock.object3d);
                scene.add(noteBlock.object3d);
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