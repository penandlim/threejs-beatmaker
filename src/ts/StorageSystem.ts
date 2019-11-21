
const localStorage = window.localStorage;
export class StorageSystem {
    private hasLocalStorage : boolean;
    static instance : StorageSystem;
    private totalNotesLength : number;
    constructor(totalNotesLength : number) {
        this.hasLocalStorage = !!window.localStorage;
        this.totalNotesLength = totalNotesLength;
        if(!this.checkIfNotesDataExist())
            this.resetNotesData();
    }
    checkIfNotesDataExist() {
        return  (localStorage.hasOwnProperty("notes"));
    }
    resetNotesData() {
        const nullArr : string[] = Array.apply(null, Array(this.totalNotesLength)).map(function () {});
        localStorage.setItem("notes", JSON.stringify(nullArr));
    }

    saveNote(index: number, note: string) {
        const notesArr : string[] = JSON.parse(localStorage.getItem("notes"));
        notesArr[index] = note;
        localStorage.setItem("notes", JSON.stringify(notesArr));
    }

    loadNotes() : string[] {
        if (this.checkIfNotesDataExist()) {
            return JSON.parse(localStorage.getItem("notes"));
        }
        return Array.apply(null, Array(this.totalNotesLength)).map(function () {});
    }
}
