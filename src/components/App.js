import React, { useEffect, useState } from "react";
import "./App.css";
import { dummyData } from "../dummy_data/data";
import Ticket from "./ticket";
import TicketsList from "./ticket-list";
import SearchArea from "./ticket-search";
import { consoleGreeting } from "../helpers";

const App = () => {
  const [ticketData, setTicketData] = useState(dummyData);
  const [selectedTicket, setSelectedTicket] = useState(ticketData[0]);
  const [searchForm, setSearchForm] = useState(false);

  const clearSearch = () => {
    setTicketData(ticketData);
    setSelectedTicket(ticketData[0]);
  };

  const searchTickets = (artistName) => {
    const artistSearch = new RegExp(artistName);
    const filteredData = ticketData.filter((ticket) =>
      ticket.artists.join(",").match(artistSearch)
    );
    if (!filteredData.length || artistName === "") {
      setTicketData(ticketData);
      setSelectedTicket(ticketData[0]);
      setSearchForm(false);
    } else {
      setTicketData(filteredData);
      setSelectedTicket(filteredData[0]);
    }
  };

  const selectTicket = (id) => {
    const thisTicketId = (ticket) => ticket.id === id;
    setSelectedTicket(ticketData.filter(thisTicketId));
  };

  const toggleSearchForm = () => {
    setSearchForm(searchForm ? false : true);
  };

  useEffect(() => {
    console.log(consoleGreeting());
  }, []);

  return (
    <div className="App">
      <Ticket ticket={selectedTicket} />
      <TicketsList tickets={ticketData} onClick={selectTicket} />
      <SearchArea
        searchTickets={searchTickets}
        searchForm={searchForm}
        toggleSearch={toggleSearchForm}
        clearSearch={clearSearch}
      />
    </div>
  );
};

export default App;
