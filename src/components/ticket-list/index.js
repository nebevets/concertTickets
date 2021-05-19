// @flow

import type { TicketType } from "../../dummy_data/data";

import "./ticket-list.css";
import * as React from "react";

type Props = {
  tickets: Array<TicketType>,
  onClick: (number) => void,
};

const TicketList = ({ tickets, onClick }: Props): React.Node => {
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
