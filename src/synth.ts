import * as tone from 'tone';
import { NoteName } from './theory';

interface SynthNote {
    note: NoteName,
    synth: any
}

function noteEqual(...synthNotes: SynthNote[]) {
    const firstNote = synthNotes[0].note;

    return synthNotes.every((n: SynthNote) => {
        return n.note === firstNote;
    });
}

export class Synth {
    notes: SynthNote[] = [];

    playNote(note: NoteName) {
        const foundNote = this.notes.find(n => {
            return note === n.note;
        });

        if (foundNote != null) {
            return;
        }

        const synth = new tone.Synth().toMaster();
        synth.triggerAttack(note);


        this.notes.push({
            note,
            synth
        });
    }

    stopNote(note: NoteName) {
        const foundNote = this.notes.find(n => {
            return note === n.note;
        });

        if (!foundNote) {
            return;
        }

        const synth = foundNote.synth;

        if (synth == null) {
            throw new Error(`synth is null.`);
        }

        synth.triggerRelease();

        this.notes = this.notes.filter((n: SynthNote) => {
            return !noteEqual(n, { note, synth: null });
        });
    }

    stopAll() {
        for (let note of this.notes) {
            note.synth.triggerRelease();
        }

        this.notes = [];
    }
}