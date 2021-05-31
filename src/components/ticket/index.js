// @flow

import type { TicketType } from "../../dummy_data/data";

import "./ticket.css";
import * as React from "react";

const Ticket = ({
  artists,
  city,
  id,
  notes,
  setlist,
  src,
  state,
  venue,
}: TicketType): React.Node => (
  <div className="ticket">
    <img alt="selected ticket stub" className="activeStub" src={src} />
    <div className="description">
      <div className="artists">
        {artists.map((artist, index) => (
          <div className="artistName" key={`${id}.${index}:${artist}`}>
            {artist}
          </div>
        ))}
      </div>
      <div className="location">{`${venue}, ${city}, ${state}`}</div>
      <div className="notes">{notes}</div>
      {setlist && (
        <div className="setlist">
          <a href={setlist} rel="noopener noreferrer" target="_blank">
            View Setlist
          </a>
        </div>
      )}
    </div>
  </div>
);

export default Ticket;
