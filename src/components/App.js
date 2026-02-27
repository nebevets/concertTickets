import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { dummyData } from "../dummy_data/data";
import Ticket from "./ticket";
import TicketList from "./ticket-list";
import TicketSearch from "./ticket-search";
import { consoleGreeting } from "../helpers";

const App = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [tickets, setTickets] = useState([]);

  const resetTickets = () => setTickets([...dummyData]);

  const searchTickets = (searchText) => {
    const artistSearch = RegExp(searchText);
    const filteredTickets = tickets.filter((ticket) =>
      JSON.stringify(ticket).match(artistSearch),
    );
    !filteredTickets.length || searchText === ""
      ? resetTickets()
      : setTickets([...filteredTickets]);
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
    tickets.length > 0 && setSelectedTicket(tickets[0]);
  }, [tickets]);

  return (
    <div className="App">
      {selectedTicket && <Ticket {...selectedTicket} />}
      {tickets.length > 0 && (
        <TicketList onClick={selectTicket} tickets={tickets} />
      )}
      <TicketSearch clearSearch={resetTickets} searchTickets={searchTickets} />
    </div>
  );
};

export default App;
