import React, { Component } from 'react';
import './App.css';
import ticketData from '../dummy_data/data';
import Ticket from './ticket';
import TicketsList from './ticket-list';
import SearchArea from './ticket-search';
import {importImages} from '../helpers';


class App extends Component {
  constructor(props) {
    super(props);
    this.stubImages = importImages(require.context('../images', false, /\.png/));
    this.state = {
      selectedTicket: ticketData[0],
      ticketData,
      isFiltered: false
    };
  }
  clearSearch = (event) => {
    event.preventDefault();
    this.setState({
      ticketData,
      selectedTicket: ticketData[0],
      isFiltered: false,
    }, this.toggleSearchForm);
  }
  searchTickets(artistName){
    const artistSearch = new RegExp(artistName);
    const filteredData = ticketData.filter(ticket => ticket.artists.join(',').match(artistSearch));
    if(!filteredData.length || artistName === ''){
      this.setState({
        ticketData,
        selectedTicket: ticketData[0],
        searchForm: false,
      });
    }else {
      this.setState({
        isFiltered: true,
        ticketData: filteredData,
        selectedTicket: filteredData[0],
      });
    }
  }
  toggleSearchForm = () => {
    const {searchForm} = this.state;
    this.setState({
      searchForm: !searchForm
    });
  }
  selectTicket = (id) => {
    const {ticketData} = this.state;
    const thisTicketId = ticket => ticket.id === id;
    const [selectedTicket] = ticketData.filter(thisTicketId);
    this.setState({
        selectedTicket,
    });
  }
  // setFocus = () => {
  //   const {searchForm} = this.props;
  //   if (searchForm){
  //     this.artistInput.focus()
  //   }
  // }
  render() {
    const {selectedTicket, ticketData, searchForm} = this.state;
    const imageSrc = this.stubImages[selectedTicket.stub];
    return (
      <div className="App">
        <Ticket ticket={selectedTicket} src={imageSrc} />
        <TicketsList
          tickets={ticketData}
          images={this.stubImages}
          onClick={this.selectTicket}
        />
        <SearchArea
          searchTickets={this.searchTickets.bind(this)}
          searchForm={searchForm}
          toggleSearch={this.toggleSearchForm}
          clearSearch={this.clearSearch.bind(this)}
        />
      </div>
    );
  }
}

export default App;
