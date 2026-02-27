import "./ticket-list.css";
import * as React from "react";

const TicketList = ({ onClick, tickets }) => {
  return (
    <ul className="ticketList">
      {tickets.map(({ id, src, tour }) => (
        <li key={id}>
          <img alt={tour} onClick={() => onClick(id)} src={src} />
        </li>
      ))}
    </ul>
  );
};

export default TicketList;
