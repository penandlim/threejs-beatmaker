import {NoteBlock} from "./NoteBlock";
import * as Tone from 'tone';
import {Instrument} from "tone/build/esm/instrument/Instrument";
import {Color} from "three";
import {Model} from "./Model";
import {PolySynth} from "tone";
import {SynthOptions} from "tone";

export class Track {
    get color(): Color {
        return this._color;
    }

    set color(value: Color) {
        this._color = value;
    }
    get instrument(): Instrument<any> {
        return this._instrument;
    }

    set instrument(value: Instrument<any>) {
        this._instrument = value;
    }
    private readonly notes : NoteBlock[] = [];
    private _instrument : Instrument<any>;
    private _color : Color;
    private model : Model;

    constructor(instrument : Instrument<any>, colorHex: number) {
        this._instrument = instrument;
        this.color = new Color(colorHex);
    }
    setModel(model : Model) {
        this.model = model;
    }
    addNoteBlock(noteBlock : NoteBlock) {
        this.notes.push(noteBlock);
    }
    getNoteBlock(index : number) : NoteBlock {
        if (this.notes.length > index)
            return this.notes[index];
        return null;
    }

    load(trackJSON: SynthOptions) {
        this.instrument.set(trackJSON);
        this.instrument.get();
    }
}