import {NoteBlock} from "./NoteBlock";

export class NoteBlockArray {
    constructor(xSize, ySize) {
        this.xSize = xSize;
        this.ySize = ySize;
        this.length =  xSize*ySize;
        this.innerArray = new Array(this.length);
        for (let i=0; i < this.length; i++) {
            this.innerArray[i] = new NoteBlock();
        }
    }

    get(index) {
        return this.innerArray[index];
    }

    addToScene(scene, xPos, yPos, xGap, yGap) {

        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                let noteBlock = this.innerArray[i * this.xSize + j];
                noteBlock.object3d.position.x = xPos + xGap * j;
                noteBlock.object3d.position.y = yPos + yGap * i;
                scene.add(noteBlock.object3d);
            }
        }
    }

}

function Array2D(xSize, ySize, initialValue) {
    initialValue=initialValue || 0;
    // create an flat empty array filled with the initial value
    var length = xSize*ySize;
    var innerArray = new Array(length);

    // accessors
    this.getAt = function(x, y) { return innerArray[x+xSize*y]};
    this.setAt = function(x, y, val) { innerArray[x+xSize*y]=val};
}