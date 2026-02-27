import { useEffect, useState } from "react";
import "./App.css";
import { dummyData } from "../dummy_data/data";
import Ticket from "./ticket";
import TicketList from "./ticket-list";
import TicketSearch from "./ticket-search";
import { consoleGreeting } from "../helpers";

const App = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [tickets, setTickets] = useState(dummyData);

  const resetTickets = () => setTickets(dummyData);

  const searchTickets = (searchText) => {
    if (!searchText.trim()) {
      setTickets(dummyData);
      return;
    }

    const lowerSearch = searchText.toLowerCase();
    const filtered = dummyData.filter((ticket) => {
      const searchFields = [
        ticket.tour,
        ticket.venue,
        ticket.city,
        ...ticket.artists,
      ];
      return searchFields.some((field) =>
        field?.toLowerCase().includes(lowerSearch),
      );
    });

    setTickets(filtered.length > 0 ? filtered : dummyData);
  };

  const selectTicket = (id) => {
    const ticketSelection = tickets.find((ticket) => ticket.id === id);
    setSelectedTicket(ticketSelection);
  };

  useEffect(() => {
    console.log(consoleGreeting());
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
