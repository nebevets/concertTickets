import React, { Component } from 'react';
import './App.css';
import data from './dummy_data/data';

const importImages = requireImage => {
    const images = {};
    requireImage.keys().map(item => images[item.replace('./', '')] = requireImage(item));
    return images;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.images = importImages(require.context('./images', false, /\.png/));
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
          <img src={this.images[data[0].ticket]} alt="ticket" />
          <div className="description">
            {data[0].artists[0]} w/ {data[0].artists[1]} at {data[0].venue}, {data[0].city}, {data[0].date.getFullYear()}.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
