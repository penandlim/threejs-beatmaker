import { NoteBlock } from "./NoteBlock";
import Tone from "tone";
import { Color } from "three";

export class NoteBlockArray {

    constructor(xSize, ySize) {
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
                this.innerArray[i * this.xSize + j] = new NoteBlock(this.noteColorArray[i], this.instrumentArray[i]);
            }
        }
    }

    get(index) {
        return this.innerArray[index];
    }

    addToScene(scene, raycastableObjs, xPos, yPos, xGap, yGap) {

        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                let noteBlock = this.innerArray[i * this.xSize + j];
                noteBlock.object3d.position.x = xPos + xGap * j;
                noteBlock.object3d.position.y = yPos + yGap * i;
                raycastableObjs.push(noteBlock.object3d);
                scene.add(noteBlock.object3d);
            }
        }
    }
}