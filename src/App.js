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
    this.searchInput = null;
    this.state = {
      isFiltered: false,
      searchForm: false,
      searchTerm: '',
      selectedTicket: ticketData[0],
      ticketData,
    }
  }
  clearSearch = (event) => {
    event.preventDefault();
    this.setState({
      ticketData,
      selectedTicket: ticketData[0],
      searchTerm: '',
    });
  }
  searchTickets = (event) => {
    event.preventDefault();
    this.toggleSearchForm();
    const {searchTerm, isFiltered} = this.state;
    const artistSearch = new RegExp(searchTerm);
    const filteredData = ticketData.filter(ticket => ticket.artists.join(',').match(artistSearch));
    if(!filteredData.length){
      this.setState({
        ticketData,
        selectedTicket: ticketData[0],
      })
    }else {
      this.setState({
        isFiltered: !isFiltered,
        ticketData: filteredData,
        selectedTicket: filteredData[0],
      });
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
  setFocus = () => {
    const {searchForm} = this.state;
    if (searchForm){
      this.searchInput.focus()
    }
  }
  setSearchTerm = (event) => {
    const newSearchTerm = event.currentTarget.value.toLowerCase();
    this.setState({
      searchTerm: newSearchTerm
    });
  }
  toggleSearchForm = () => {
    const {searchForm} = this.state;
    this.setState({
      searchForm: !searchForm
    }, this.setFocus);
  }
  render() {
    const {isFiltered, searchForm, searchTerm, selectedTicket, ticketData} = this.state;
    const imageSrc = this.stubImages[selectedTicket.stub];
    return (
      <div className="App">
        <Ticket ticket={selectedTicket} src={imageSrc} />
        <TicketsList
          tickets={ticketData}
          images={this.stubImages}
          onClick={this.selectTicket}
          isFiltered={isFiltered}
          clearSearch={this.clearSearch}
        />
        <form className="searchArea" onSubmit={this.searchTickets}>
          <img className="searchIcon" src={searchIcon} alt="search" onClick={this.toggleSearchForm} />
          {
            searchForm
              ? <input
                  ref={(thisInput) => this.searchInput = thisInput}
                  className='searchInput'
                  placeholder="artist name"
                  type="text"
                  onBlur={this.toggleSearchForm}
                  onChange={this.setSearchTerm}
                  value={searchTerm}
                />
              : null
          }
        </form>
      </div>
    );
  }
}

export default App;
