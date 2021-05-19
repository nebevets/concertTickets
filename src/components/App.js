// @flow

import type { TicketType } from "../dummy_data/data";

import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { dummyData } from "../dummy_data/data";
import Ticket from "./ticket";
import TicketList from "./ticket-list";
import TicketSearch from "./ticket-search";
import { consoleGreeting } from "../helpers";

const App = (): React.Node => {
  const [tickets, setTickets] = useState<Array<TicketType>>([]);
  const [selectedTicket, setSelectedTicket] = useState<?TicketType>(null);

  const clearSearch = () => {
    setTickets([...dummyData]);
  };

  const searchTickets = (searchText: string): void => {
    const artistSearch = RegExp(searchText);
    const filteredData = tickets.filter((ticket) =>
      JSON.stringify(ticket).match(artistSearch)
    );
    if (!filteredData.length || searchText === "") {
      clearSearch();
    } else {
      setTickets(filteredData);
    }
  };

  const selectTicket = (id: number): void => {
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

  return (
    <div className="App">
      {selectedTicket && <Ticket {...selectedTicket} />}
      {tickets.length > 0 && (
        <TicketList tickets={tickets} onClick={selectTicket} />
      )}
      <TicketSearch searchTickets={searchTickets} clearSearch={clearSearch} />
    </div>
  );
};

export default App;
