import {SynthOptions} from "tone";
import {Track} from "./Track";

const localStorage = window.localStorage;

export class StorageSystem {
    private hasLocalStorage : boolean;
    static instance : StorageSystem = null;
    private totalNotesLength : number;
    private trackLength : number;
    constructor(totalNotesLength : number, trackSize : number) {
        this.hasLocalStorage = !!window.localStorage;
        this.totalNotesLength = totalNotesLength;
        this.trackLength = trackSize;
        if(!this.checkIfDataExists())
            this.resetData();
        StorageSystem.instance = this;
    }
    checkIfDataExists() {
        return  (localStorage.hasOwnProperty("notes") && localStorage.hasOwnProperty("tracks") );
    }
    resetData() {
        const nullArr : string[] = Array.apply(null, Array(this.totalNotesLength)).map(function () {});
        const trackArr : string[] = Array.apply(null, Array(this.trackLength)).map(function () {});

        localStorage.setItem("notes", JSON.stringify(nullArr));
        localStorage.setItem("tracks", JSON.stringify(trackArr));
    }

    writeNoteData(index: number, note: string) {
        const notesArr : string[] = JSON.parse(localStorage.getItem("notes"));
        notesArr[index] = note;
        localStorage.setItem("notes", JSON.stringify(notesArr));
    }

    saveAllNotes(notesArr : string[]) {
        localStorage.setItem("notes", JSON.stringify(notesArr));
    }

    readAllNotes() : string[] {
        if (this.checkIfDataExists()) {
            return JSON.parse(localStorage.getItem("notes"));
        }
        return Array.apply(null, Array(this.totalNotesLength)).map(function () {});
    }

    readAllTracks() : SynthOptions[] {
        if (this.checkIfDataExists()) {
            return JSON.parse(localStorage.getItem("tracks"));
        }
        return Array.apply(null, Array(this.trackLength)).map(function () {});
    }

    writeTracksData(options : SynthOptions[]) {
        const trackArr : SynthOptions[] = JSON.parse(localStorage.getItem("tracks"));
        trackArr.forEach(function(value, index, array){
            trackArr[index] = options[index];
        });
        localStorage.setItem("tracks", JSON.stringify(trackArr));
    }

    writeTrackData(track : Track) {
        const trackArr : SynthOptions[] = JSON.parse(localStorage.getItem("tracks"));
        trackArr[track.trackIndex] = track.instrument.get();
        localStorage.setItem("tracks", JSON.stringify(trackArr));
    }
}