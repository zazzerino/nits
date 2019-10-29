import React from 'react';
import { useDispatch } from 'react-redux';
import { stopAllNotes } from './actions';

export function StopButton() {
    const dispatch = useDispatch();
    // const synth = useSelector((state: any) => state.synth);

    return (
        <div className="StopButton">
            <button onClick={() => {
                dispatch(stopAllNotes());
            }}>
                Stop
            </button>
        </div>
    );
}