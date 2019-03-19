import React from 'react';

const TicketsList = ({tickets, images, onClick}) =>
  <ul>
    {
      tickets.map(ticket => 
        <li key={ticket.id}>
          <img src={images[ticket.stub]} alt={ticket.tour} onClick={() => onClick(ticket.id)} />
        </li>
      )
    }
  </ul>

export default TicketsList;
