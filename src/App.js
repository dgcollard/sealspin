import React, { useState } from 'react';
import useInterval from './useInterval';
import './App.css';

function App() {
  const [ count, setCount ] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 3300);

  return (
    <div className="App">
      <header className="App-header">
        <p className="spins">{count} <del>hashes</del> spins</p>
        <iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/eY52Zsg-KVI?autoplay=1&mute=1" frameBorder="0" allowFullScreen />
        <p className="spins">thx for cpu</p>
      </header>
    </div>
  );
}

export default App;
