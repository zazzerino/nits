import React from 'react';
import { StopButton } from './components';
import { Keyboard } from './Keyboard';
import { Synth } from './synth';
import './App.css';

const synth = new Synth();

const App: React.FC = () => {
  return (
    <div className="App">
      <Keyboard />
      <StopButton />
    </div>
  );
}

export default App;
