import './ticket-list.css';
import React from 'react';

const TicketList = ({tickets, images, onClick}) =>
  <ul className="ticketList">
    {
      tickets.map(ticket => 
        <li key={ticket.id}>
          <img src={images[ticket.stub]} alt={ticket.tour} onClick={() => onClick(ticket.id)} />
        </li>
      )
    }
  </ul>

export default TicketList;
