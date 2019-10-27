import React from 'react';

export function StopButton() {
    return (
        <div className="StopButton">
            <button onClick={() => console.log('stop button clicked')}>
                Stop
            </button>
        </div>
    );
}