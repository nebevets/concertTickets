import "./ticket-search.css";
import * as React from "react";
import { useState } from "react";

const TicketSearch = ({ clearSearch, searchTickets }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const toggleSearchForm = () => setIsExpanded(!isExpanded);

  return (
    <div className="searchArea" onBlur={toggleSearchForm}>
      <div className="magnifier" onClick={toggleSearchForm}></div>
      {isExpanded && (
        <form
          autoComplete="off"
          className="searchForm"
          onSubmit={(event) => {
            event.preventDefault();
            searchTickets(searchInput.toLowerCase());
          }}
        >
          <input
            className="searchInput"
            name="artist"
            onChange={handleInputChange}
            placeholder="search tickets for..."
            value={searchInput}
          />
          <button
            className="clearSearch"
            onClick={() => {
              setSearchInput("");
              clearSearch();
              toggleSearchForm();
            }}
            title="clear search..."
            type="button"
          >
            X
          </button>
        </form>
      )}
    </div>
  );
};

export default TicketSearch;
