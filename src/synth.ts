import * as tone from 'tone';

interface SynthNote {
    note: string,
    synth: any
}

function makeSynth() {
    return new tone.Synth().toMaster();
}

function findSynthNote(note: string, notes: SynthNote[]): SynthNote | null {
    for (const synthNote of notes) {
        if (note === synthNote.note) {
            return synthNote;
        }
    }
    return null;
}

export class Synth {
    notes: SynthNote[] = [];

    play(note: string) {
        const synthNote = findSynthNote(note, this.notes);

        if (synthNote != null) {
            // if note is already playing, do nothing
            return;
        }

        const synth = makeSynth();
        synth.triggerAttack(note);

        this.notes.push({
            note,
            synth
        });
        console.log(this.notes);
    }

    stop(note: string) {
        const synthNote = findSynthNote(note, this.notes);

        if (synthNote == null) {
            // if note wasn't playing, do nothing
            return;
        }

        let index: number;

        for (let i = 0; i < this.notes.length; i++) {
            if (note === this.notes[i].note) {
                index = i;
                break;
            }
        }

        if (index == undefined) {
            throw new Error("SynthNote index not found.")
        }

        synthNote.synth.triggerRelease(synthNote.note);

        this.notes.splice(index, 1);
        console.log(this.notes);
    }

    stopAll() {
        for (let note of this.notes) {
            note.synth.triggerRelease();
        }
    }
}