import "./ticket-list.css";
import React from "react";

const TicketList = ({ tickets, onClick }) => {
  console.log(tickets);
  return (
    <ul className="ticketList">
      {tickets.map(({ id, src, tour }) => (
        <li key={id}>
          <img src={src} alt={tour} onClick={() => onClick(id)} />
        </li>
      ))}
    </ul>
  );
};

export default TicketList;
