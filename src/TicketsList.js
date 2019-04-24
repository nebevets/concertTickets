import React from 'react';

const TicketsList = ({tickets, images, onClick, isFiltered, clearSearch}) =>
  <ul>
    {
      tickets.map(ticket => 
        <li key={ticket.id}>
          <img src={images[ticket.stub]} alt={ticket.tour} onClick={() => onClick(ticket.id)} />
        </li>
      )
    }
    {
      isFiltered
        ? <li>
            <button onClick={clearSearch}>clear search</button>
          </li>
        : null
    }
  </ul>

export default TicketsList;
