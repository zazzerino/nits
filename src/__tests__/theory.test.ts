import { equalTemp, frequency, semitonesFromD4, parseNote, noteFrequency, pythagoreanTemp } from '../theory';

it('parses notes', () => {
    expect(parseNote("C4")).toEqual({ pitchClass: 0, octave: 4 });
    expect(parseNote("A#6")).toEqual({ pitchClass: 10, octave: 6 });
});

it('calculates frequencies', () => {
    expect(frequency(440, 0)).toBe(440);
    expect(frequency(440, 12)).toBe(880);
});

it('calcs semitones from d4', () => {
    expect(semitonesFromD4({ pitchClass: 2, octave: 4 })).toBe(0);
    expect(semitonesFromD4({ pitchClass: 4, octave: 4 })).toBe(2);
    expect(semitonesFromD4({ pitchClass: 0, octave: 4 })).toBe(-2);
});

it('calculates frequencies of notes', () => {
    expect(noteFrequency("A4", 440, equalTemp)).toBe(440);
    expect(noteFrequency("E5", 440, pythagoreanTemp)).toBe(660);
});