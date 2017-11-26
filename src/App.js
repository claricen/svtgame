import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './actions';
import './App.css';

import wonwoo from './assets/wonwoo_full.png';
import woozi from './assets/woozi_full.png';
import mingyu from './assets/mingyu_full.png';

import confidant_bb from './assets/svtgame_confidant_bb.png'
import confidant_t8 from './assets/svtgame_confidant_t8.png'
import confidant_jh from './assets/svtgame_confidant_jh.png'
import confidant_wz from './assets/svtgame_confidant_wz.png'

import prevButton from './assets/prev_button.png'
import nextButton from './assets/next_button.png'

const character = (
  <div className="characterPreview">
    <img src={woozi} alt="selected character"/>
  </div>
);

const blackBox = (
  <div className="blackBox">
  </div>
);

const allCharacters = [
  [0,1,2,3],
  [0,1,2,3],
  [0,1,2,3],
  [0,1,2,3],
];

const confidants = [
  confidant_jh,
  confidant_t8,
  confidant_wz,
  confidant_bb,
];

const characterGrid = (
  <div className="characterGrid">
    {allCharacters.map(() => {
      return (
        <div className="gridRow">
          {
            allCharacters.map(() => {
              return blackBox;
            })
          }
        </div>
      );
    })
    }
  </div>
);

const characterMenu = (
  <div className="container">
    <div className="mainBackground">
      <div className="left">
        {characterGrid}
      </div>
      <div className="right">
        {character}
      </div>
    </div>
  </div>
)

var currentConfidant = 0;


class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.nextClick= this.nextClick.bind(this);
    this.prevClick= this.prevClick.bind(this);
  }

  handleChangeConfidant(e) {
    if (e.keyCode ==- 37){
      currentConfidant = currentConfidant === 0 ? confidants.length - 1 : currentConfidant - 1;
      this.props.changeConfidant(currentConfidant);
    } else if (e.keycode === 39) {
      currentConfidant = currentConfidant === confidants.length - 1 ? 0 : currentConfidant + 1;
    }
  }

  nextClick(e) {
    currentConfidant = currentConfidant === confidants.length - 1 ? 0 : currentConfidant + 1;
    this.props.changeConfidant(currentConfidant);
  }

  prevClick(e) {
    currentConfidant = currentConfidant === 0 ? confidants.length - 1 : currentConfidant - 1;
    this.props.changeConfidant(currentConfidant);
  }

  render() {
    return (
      <div>
        <div className="container" >
          <div className="confidant">
            <img src={confidants[this.props.confidant || 0]} alt="selected confidant"/>
          </div>
        </div>
        <div className="prev button" onClick={this.prevClick}><img src={prevButton} /></div>
        <div className="next button" onClick={this.nextClick}><img src={nextButton} /></div>
        <div className="name">@pikacheols </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    confidant: state.confidant,
    changeConfidant: (c) => (state.changeConfidant(state, c))
  };
}

export default App = connect(mapStateToProps, actionCreators)(App);
