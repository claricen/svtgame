import React, { Component } from 'react';
import './App.css';

import wonwoo from './assets/wonwoo_full.png';
import woozi from './assets/woozi_full.png';
import mingyu from './assets/mingyu_full.png';

const character = (
  <div className="characterPreview">
    <img src={woozi} alt="selected character"/>
  </div>
);

const allCharacters = [
  [0,1,2,3],
  [0,1,2,3],
  [0,1,2,3],
  [0,1,2,3],
];

const characterGrid = (
  <div className="characterGrid">
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainBackground">
          <div className="left">
          </div>
          <div className="right">
            {character}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
