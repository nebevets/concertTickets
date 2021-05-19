import "./ticket.css";
import React from "react";

const Ticket = ({ id, src, artists, venue, city, state, setlist, notes }) => (
  <div className="ticket">
    <img className="activeStub" src={src} alt="selected ticket stub" />
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
          <a href={setlist} target="_blank" rel="noopener noreferrer">
            View Setlist
          </a>
        </div>
      )}
    </div>
  </div>
);

export default Ticket;
