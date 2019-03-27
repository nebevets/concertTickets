import React, { Component } from 'react';
import './App.css';
import ticketData from './dummy_data/data';
import Ticket from './Ticket';
import TicketsList from './TicketsList';
import searchIcon from './search_icon.png';

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
      selectedTicket: ticketData[0],
    }
  }
  searchTickets = (event) => {
    const {searchTerm} = this.state;
    const filteredData = ticketData.filter(ticket => ticket.artists.indexOf(searchTerm) !== -1);
    if(!filteredData.length){
      this.setState({
        ticketData,
        selectedTicket: ticketData[0],
      })
    }else {
      this.setState({
        ticketData: filteredData,
        selectedTicket: filteredData[0],
      });
    }
    event.preventDefault();
  }
  selectTicket = (id) => {
    const {ticketData} = this.state;
    const thisTicketId = ticket => ticket.id === id;
    const [selectedTicket] = ticketData.filter(thisTicketId);
    this.setState({
        selectedTicket,
    });
  }
  setSearchTerm = (event) => {
    const newSearchTerm = event.currentTarget.value.toLowerCase();
    this.setState({
      searchTerm: newSearchTerm
    });
    event.preventDefault();
  }
  render() {
    const {ticketData, selectedTicket} = this.state;
    const imageSrc = this.stubImages[selectedTicket.stub];

    return (
      <div className="App">
        <Ticket ticket={selectedTicket} src={imageSrc} />
        <TicketsList tickets={ticketData} images={this.stubImages} onClick={this.selectTicket}/>
        <form className="searchForm" onSubmit={this.searchTickets}>
          <img src={searchIcon} alt="search" /><input type="text" onChange={this.setSearchTerm} />
        </form>
      </div>
    );
  }
}

export default App;
