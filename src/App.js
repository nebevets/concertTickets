import React, { Component } from 'react';
import mbm from './images/1992.11.29_meatBeatManifesto_orbital.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>welcome to concert tickets</h1>
        <div className="ticket">
          <img src={mbm} alt="ticket" />
          <div className="description">
            meat beat manifesto w/ orbital at masquerade club, atlanta, 1992.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
