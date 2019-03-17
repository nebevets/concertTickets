import React, { Component } from 'react';
import './App.css';
import data from './dummy_data/data';

const importImages = requireImage => {
    const images = {};
    requireImage.keys().map(item => images[item.replace('./', '')] = requireImage(item));
    return images;
}

const Tickets = ({tickets, images}) =>
  <ul>
    {tickets.map(item => 
      <li key={item.id}>
        <img src={images[item.stub]} alt={item.tour} />
      </li>
      )
    }
  </ul>


class App extends Component {
  constructor(props) {
    super(props);
    this.images = importImages(require.context('./images', false, /\.png/));
    this.state = {
      data,
      page: 0
    }
  }
  nextPage = next => {
    this.setState({page: next});
  }
  render() {
    const {data, page} = this.state;
    const nextPage = page + 1 >= data.length
      ? 0
      : page + 1
    return (
      <div className="App">
        <div className="ticket">
          <img src={this.images[data[page].stub]} alt="ticket" />
          <div className="description">
            {data[page].artists[0]} w/ {data[page].artists[1]} at {data[page].venue}, {data[page].city}, {data[page].date.getFullYear()}.
          </div>
          <button onClick={() => this.nextPage(nextPage)}>Next</button>
        </div>
        <Tickets tickets={data} images={this.images} />
      </div>
    );
  }
}

export default App;
