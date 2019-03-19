import React, { Component } from 'react';
import './App.css';
import ticketData from './dummy_data/data';
import Ticket from './Ticket';
import TicketsList from './TicketsList';

const importImages = (requireImage) => {
  const imagePaths = {};
  requireImage.keys()
              .map(fileInfo => imagePaths[fileInfo.replace('./', '')] = requireImage(fileInfo));
  return imagePaths;
}

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
    const imageSrc = this.stubImages[selectedTicket.stub];

    return (
      <div className="App">
        <Ticket ticket={selectedTicket} src={imageSrc} />
        <TicketsList tickets={ticketData} images={this.stubImages} onClick={this.selectTicket}/>
      </div>
    );
  }
}

export default App;
