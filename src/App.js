import React, { Component } from 'react';
import './App.css';
import ticketData from './dummy_data/data';

const importImages = (requireImage) => {
    const imagePaths = {};
    requireImage.keys()
                .map(fileInfo => imagePaths[fileInfo.replace('./', '')] = requireImage(fileInfo));
    return imagePaths;
}

const TicketsList = ({tickets, images, onClick}) =>
  <ul>
    {
      tickets.map(ticket => 
        <li key={ticket.id}>
          <img src={images[ticket.stub]} alt={ticket.tour} onClick={() => onClick(ticket.id)} />
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
      selectedTicket: ticketData[0]
    }
  }
  selectTicket = (id) => {
    const {ticketData} = this.state;
    const thisTicketId = ticket => ticket.id === id;
    const [selectedTicket] = ticketData.filter(thisTicketId);
    this.setState({
        selectedTicket,
    });
  }
  render() {
    const {ticketData, selectedTicket} = this.state;

    return (
      <div className="App">
        <div className="ticket">
          <img src={this.stubImages[selectedTicket.stub]} alt="ticket stub" />
          <div className="description">
            <div className="artists">
              {
                selectedTicket.artists.map((artist, index) => <div className="artistName" key={`${selectedTicket.id}.${index}:${artist}`}>
                                                                {artist}
                                                              </div>)
              }
            </div>
            <div className="location">
              {`${selectedTicket.venue}, ${selectedTicket.city}, ${selectedTicket.state}`}
            </div>
            <div className="notes">
              {selectedTicket.notes}
            </div>
            {
              selectedTicket.setlist
                ? <div className="setlist">
                    <a href={selectedTicket.setlist} target="_blank" rel="noopener noreferrer">View Setlist</a>
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
