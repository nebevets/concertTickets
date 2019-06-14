import React, { Component } from 'react';
import './App.css';
import ticketData from '../dummy_data/data';
import Ticket from './ticket';
import TicketsList from './ticket-list';
import SearchArea from './ticket-search';

const importImages = (requireImage) => {
  const imagePaths = {};
  requireImage
    .keys()
    .map(fileInfo => 
      imagePaths[fileInfo.replace('./', '')] = requireImage(fileInfo)
    );
  return imagePaths;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.stubImages = importImages(require.context('../images', false, /\.png/));
    this.state = {
      selectedTicket: ticketData[0],
      ticketData,
    };
  }
  // clearSearch = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     ticketData,
  //     selectedTicket: ticketData[0],
  //     searchTerm: '',
  //     isFiltered: false,
  //   });
  // }
  searchTickets(artistName){
    console.log(artistName);
    const artistSearch = new RegExp(artistName);
    const filteredData = ticketData.filter(ticket => ticket.artists.join(',').match(artistSearch));
    console.log(filteredData);
    // if(!filteredData.length || artistName === ''){
    //   this.setState({
    //     ticketData,
    //     selectedTicket: ticketData[0],
    //     isFiltered: false,
    //   })
    // }else {
    //   this.setState({
    //     isFiltered: true,
    //     ticketData: filteredData,
    //     selectedTicket: filteredData[0],
    //   });
    // }
  }
  // setFocus = () => {
  //   const {searchForm} = this.state;
  //   if (searchForm){
  //     this.searchInput.focus()
  //   }
  // }
  // toggleSearchForm = () => {
  //   const {searchForm} = this.state;
  //   this.setState({
  //     searchForm: !searchForm
  //   }, this.setFocus);
  // }
  selectTicket = (id) => {
    const {ticketData} = this.state;
    const thisTicketId = ticket => ticket.id === id;
    const [selectedTicket] = ticketData.filter(thisTicketId);
    this.setState({
        selectedTicket,
    });
  }
  render() {
    const {selectedTicket, ticketData} = this.state;
    const imageSrc = this.stubImages[selectedTicket.stub];
    return (
      <div className="App">
        <Ticket ticket={selectedTicket} src={imageSrc} />
        <TicketsList
          tickets={ticketData}
          images={this.stubImages}
          onClick={this.selectTicket}
        />
        <SearchArea searchTickets={this.searchTickets.bind(this)}/>
      </div>
    );
  }
}

export default App;
