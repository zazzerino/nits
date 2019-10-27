import React from 'react';
import * as qh from 'qwerty-hancock';

export function Keyboard() {
    const elem = React.useRef(null);

    React.useEffect(() => {
        const qwerty = new qh.QwertyHancock({
            id: "qwerty-hancock",
            width: 500,
            height: 180,
            startNote: "C4",
            octaves: 2
        });

        qwerty.keyDown = (key: string) => {
            console.log(key + ' down')
        };

        qwerty.keyUp = (key: string) => {
            console.log(key + ' up')};
    });

    return (
        <div className="Keyboard">
            <div id="qwerty-hancock" ref={elem} />
        </div>
    );
}