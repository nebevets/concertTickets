import React, { Component } from 'react';
import './App.css';
import ticketData from './dummy_data/data';

const importImages = requireImage => {
    const images = {};
    requireImage.keys().map(item => images[item.replace('./', '')] = requireImage(item));
    return images;
}

const TicketsList = ({tickets, images, onClick}) =>
  <ul>
    {
      tickets.map(item => 
        <li key={item.id}>
          <img src={images[item.stub]} alt={item.tour} onClick={() => onClick(item.id)} />
        </li>
      )
    }
  </ul>

class App extends Component {
  constructor(props) {
    super(props);
    this.stubImages = importImages(require.context('./images', false, /\.png/));
    this.state = {
      ticketData,
      selectedTicket: ticketData[0].id
    }
  }
  selectTicket = (id) => {
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
          <img src={this.stubImages[ticket.stub]} alt="ticket stub" />
          <div className="description">
            <div className="artists">{ticket.artists.map((item, index) => <div className="artistName" key={`${ticket.id}.${index}:${item}`}>{item}</div>)}</div>
            <div className="location">{`${ticket.venue}, ${ticket.city}, ${ticket.state}`}</div>
            <div className="notes">{ticket.notes}</div>
            {
              ticket.setlist
                ? <div className="setlist">
                    <a href={ticket.setlist} target="_blank" rel="noopener noreferrer">View Setlist</a>
                  </div>
                : null
            }
          </div>
        </div>
        <TicketsList tickets={ticketData} images={this.stubImages} onClick={this.selectTicket}/>
      </div>
    );
  }
}

export default App;
