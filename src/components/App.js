import React, { useEffect, useState } from "react";
import "./App.css";
import { dummyData } from "../dummy_data/data";
import Ticket from "./ticket";
import TicketsList from "./ticket-list";
import SearchArea from "./ticket-search";
import { consoleGreeting } from "../helpers";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const clearSearch = () => {
    setTickets([...dummyData]);
    setSelectedTicket(tickets[0]);
  };

  const searchTickets = (artistName) => {
    const artistSearch = new RegExp(artistName);
    const filteredData = tickets.filter((ticket) =>
      ticket.artists.join(",").match(artistSearch)
    );
    if (!filteredData.length || artistName === "") {
      setTickets(tickets);
    } else {
      setTickets(filteredData);
    }
  };

  const selectTicket = (id) => {
    const [ticketSelection] = tickets.filter((ticket) => ticket.id === id);
    setSelectedTicket(ticketSelection);
  };

  useEffect(() => {
    console.log(consoleGreeting());
    setTickets([...dummyData]);
  }, []);

  useEffect(() => {
    tickets.length > 1 && setSelectedTicket(tickets[0]);
  }, [tickets]);

  console.log(selectedTicket);

  return (
    <div className="App">
      {selectedTicket && <Ticket {...selectedTicket} />}
      {tickets.length > 0 && (
        <TicketsList tickets={tickets} onClick={selectTicket} />
      )}
      <SearchArea searchTickets={searchTickets} clearSearch={clearSearch} />
    </div>
  );
};

export default App;
