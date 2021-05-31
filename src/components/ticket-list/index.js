// @flow

import type { TicketType } from "../../dummy_data/data";

import "./ticket-list.css";
import * as React from "react";

type Props = {
  onClick: (number) => void,
  tickets: Array<TicketType>,
};

const TicketList = ({ onClick, tickets }: Props): React.Node => {
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
