import React from 'react';
import * as qh from 'qwerty-hancock';
import { useDispatch } from 'react-redux';
import { playNote, stopNote } from './actions';


export function Keyboard() {
    const dispatch = useDispatch();
    const elem = React.useRef(null);

    React.useEffect(() => {
        const qwerty = new qh.QwertyHancock({
            id: "qwerty-hancock",
            width: 500,
            height: 180,
            startNote: "C4",
            octaves: 2
        });

        qwerty.keyDown = (note: string) => {
            dispatch(playNote(note));
        };

        qwerty.keyUp = (note: string) => {
            dispatch(stopNote(note));
        }
    });

    return (
        <div className="Keyboard">
            <div id="qwerty-hancock" ref={elem} />
        </div>
    );
}