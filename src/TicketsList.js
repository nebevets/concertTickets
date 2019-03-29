import React from 'react';

const TicketsList = ({tickets, images, onClick, searchTerm, clearSearch}) =>
  <ul>
    {
      tickets.map(ticket => 
        <li key={ticket.id}>
          <img src={images[ticket.stub]} alt={ticket.tour} onClick={() => onClick(ticket.id)} />
        </li>
      )
    }
    {
      searchTerm
        ? <li>
            <button onClick={clearSearch}>clear search</button>
          </li>
        : null
    }
  </ul>

export default TicketsList;
