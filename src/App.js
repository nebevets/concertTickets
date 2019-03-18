import React, { Component } from 'react';
import './App.css';
import ticketData from './dummy_data/data';

const importImages = requireImage => {
    const images = {};
    requireImage.keys().map(item => images[item.replace('./', '')] = requireImage(item));
    return images;
}

const Tickets = ({tickets, images, onClick}) =>
  <ul>
    {tickets.map(item => 
      <li key={item.id}>
        <img src={images[item.stub]} alt={item.tour} onClick={() => onClick(item.id)} />
      </li>
      )
    }
  </ul>

class App extends Component {
  constructor(props) {
    super(props);
    this.images = importImages(require.context('./images', false, /\.png/));
    this.state = {
      ticketData,
      selectedTicket: ticketData[0].id
    }
  }
  onClickedTicket = (id) => {
    const newTicketId = id;
    this.setState({
        selectedTicket: newTicketId,
    });
  }
  render() {
    const {ticketData, selectedTicket} = this.state;
    const isId = item => item.id === selectedTicket;
    const [ticket] = ticketData.filter(isId);

    return (
      <div className="App">
        <div className="ticket">
          <img src={this.images[ticket.stub]} alt="ticket" />
          <div className="description">
            {ticket.artists[0]} w/ {ticket.artists[1]} at {ticket.venue}, {ticket.city}, {ticket.date.getFullYear()}.
          </div>
        </div>
        <Tickets tickets={ticketData} images={this.images} onClick={this.onClickedTicket}/>
      </div>
    );
  }
}

export default App;
