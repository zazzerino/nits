export type NoteName = string;
export type Temperament = number[];
export interface Note {
    pitchClass: number,
    octave: number    
};

export let equalTemp: Temperament = [];
for (let x = 0; x <= 12; x++) {
    equalTemp.push(Math.pow(2, x / 12));
}

export const pythagoreanTemp: Temperament = [
    1,
    256 / 243,
    9 / 8,
    32 / 27,
    81 / 64,
    4 / 3,
    729 / 512,
    3 / 2,
    128 / 81,
    27 / 16,
    16 / 9,
    243 / 128,
    2
];

export function parseNote(notename: NoteName): Note {
    const noteRegex = /^([A-G]#?)(\d)$/
    const res = noteRegex.exec(notename);
    const [_, name, octave] = res;

    const notes = {
        'C': 0,
        'C#': 1,
        'D': 2,
        'D#': 3,
        'E': 4,
        'F': 5,
        'F#': 6,
        'G': 7,
        'G#': 8,
        'A': 9,
        'A#': 10,
        'B' : 11
    }

    return {
        pitchClass: notes[name],
        octave: Number(octave)
    }
}

// export function parseNote(note: NoteName) {
//     const noteRegex = /([a-zA-Z])(#{1,2}||b{1,2})\/?(\d)/g;
//     const res = noteRegex.exec(note);

//     if (res != null) {
//         const [_, whiteKey, accidental, octave] = res;
//         return { whiteKey, accidental, octave };
//     } else {
//         throw new Error(`${note} could not be parsed.`);
//     }
// }

export function frequency(rootFreq: number, halfSteps: number, temp = equalTemp) {
    const pitchClass = ((halfSteps % 12) + 12) % 12;
    const interval = temp[pitchClass];
    const octave = Math.floor(halfSteps / 12);

    return rootFreq * interval * Math.pow(2, octave)
}

export function semitonesFromD4(note: Note) {
    return (note.pitchClass - 2) + ((note.octave - 4) * 12);
}

export function noteFrequency(note: NoteName, a4Freq: number, temp: Temperament) {
    const d4Freq = a4Freq * (1 / temp[7]);
    const semitones = semitonesFromD4(parseNote(note));

    return frequency(d4Freq, semitones, temp);
}