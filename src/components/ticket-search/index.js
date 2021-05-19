import "./ticket-search.css";
import React, { useState } from "react";

const SearchArea = ({ searchTickets, clearSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [artistInput, setArtistInput] = useState({ artist: "" });

  const toggleSearchForm = () => {
    setIsExpanded(isExpanded ? false : true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArtistInput({
      [name]: value,
    });
  };

  return (
    <div className="searchArea" onBlur={toggleSearchForm}>
      <div className="magnifier" onClick={toggleSearchForm}></div>
      {isExpanded && (
        <form
          className="searchForm"
          onSubmit={(event) => {
            event.preventDefault();
            searchTickets(artistInput.artist.toLowerCase());
          }}
          autoComplete="off"
        >
          <input
            className="searchInput"
            onChange={handleInputChange}
            name="artist"
            value={artistInput.artist}
            placeholder="artist name"
          />
          <button
            onClick={() => {
              setArtistInput({
                artist: "",
              });
              toggleSearchForm();
              clearSearch();
            }}
            className="clearSearch"
            type="button"
            title="clear search..."
          >
            X
          </button>
        </form>
      )}
    </div>
  );
};

export default SearchArea;
