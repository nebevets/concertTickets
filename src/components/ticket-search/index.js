// @flow

import "./ticket-search.css";
import * as React from "react";
import { useState } from "react";

type Props = { clearSearch: () => void, searchTickets: (string) => void };

const TicketSearch = ({ clearSearch, searchTickets }: Props): React.Node => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputChange = (
    event: SyntheticInputEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const toggleSearchForm = (): void => setIsExpanded(!isExpanded);

  return (
    <div className="searchArea" onBlur={toggleSearchForm}>
      <div className="magnifier" onClick={toggleSearchForm}></div>
      {isExpanded && (
        <form
          autoComplete="off"
          className="searchForm"
          onSubmit={(event: SyntheticEvent<HTMLFormElement>): void => {
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
