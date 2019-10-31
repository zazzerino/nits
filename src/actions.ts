import { NoteName, equalTemp } from './theory';
import { Synth } from './synth';

const synth = new Synth();

// action types

export const PLAY_NOTE = 'PLAY_NOTE';
export const STOP_NOTE = 'STOP_NOTE';
export const STOP_ALL_NOTES = 'STOP_ALL_NOTES';

// action interfaces

export interface PlayNoteAction {
    type: typeof PLAY_NOTE,
    note: NoteName
}

export interface StopNoteAction {
    type: typeof STOP_NOTE,
    note: NoteName
}

export interface StopAllNotesAction {
    type: typeof STOP_ALL_NOTES
}

// action creators

export function playNote(note: NoteName): PlayNoteAction {
    synth.retune(note, 111, equalTemp);
    synth.playNote(note);

    return {
        type: PLAY_NOTE,
        note
    }
}

export function stopNote(note: NoteName): StopNoteAction {
    synth.stopNote(note);

    return {
        type: STOP_NOTE,
        note
    }
}

export function stopAllNotes(): StopAllNotesAction {
    synth.stopAll();

    return {
        type: STOP_ALL_NOTES,
    }
}

export type Action = PlayNoteAction | StopNoteAction;