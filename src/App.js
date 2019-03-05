import React, { Component } from 'react';
import './App.css';
import data from './dummy_data/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    }
  }
  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <h1>welcome to concert tickets</h1>
        <div className="ticket">
          <img src={require('./images/1990.06.04_depecheMode_nitzerEbb.png')} alt="ticket" />
          <div className="description">
            {data[0].artists[0]} w/ {data[0].artists[1]} at {data[0].venue}, {data[0].city}, {data[0].date.getFullYear()}.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
