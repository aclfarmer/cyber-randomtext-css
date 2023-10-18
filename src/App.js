import React from 'react';
import './App.css';

import AnimationLink from './animationLink.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
                <AnimationLink
                  targetId={'appHackLink'}
                  to={''}
                  dataValue={'Click here to connect to the cyberspace'}
                /> 
        <p>
          Hover over the text to trigger the animation.
        </p>
      </header>
    </div>
  );
}

export default App;
