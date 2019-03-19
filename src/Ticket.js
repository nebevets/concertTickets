import React from 'react'; 

const Ticket = ({ticket, src}) => 
  <div className="ticket">
    <img src={src} alt="ticket stub" />
    <div className="description">
      <div className="artists">
        {
          ticket.artists.map((artist, index) => <div className="artistName" key={`${ticket.id}.${index}:${artist}`}>
                                                  {artist}
                                                </div>)
        }
      </div>
      <div className="location">
        {
          `${ticket.venue}, ${ticket.city}, ${ticket.state}`
        }
      </div>
      <div className="notes">
        {ticket.notes}
      </div>
      {
        ticket.setlist
          ? <div className="setlist">
              <a href={ticket.setlist} target="_blank" rel="noopener noreferrer">View Setlist</a>
            </div>
          : null
      }
    </div>
  </div>

  export default Ticket;
