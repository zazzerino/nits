import React from 'react';
import { StopButton } from './components';
import { Keyboard } from './Keyboard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Keyboard />
      <StopButton />
    </div>
  );
}

export default App;
