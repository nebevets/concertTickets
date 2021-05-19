// @flow

import "./ticket-search.css";
import * as React from "react";
import { useState } from "react";

type Props = { searchTickets: (string) => void, clearSearch: () => void };
type ArtistType = { artist: string };

const TicketSearch = ({ searchTickets, clearSearch }: Props): React.Node => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [artistInput, setArtistInput] = useState<ArtistType>({
    artist: "",
  });

  const toggleSearchForm = (): void => {
    setIsExpanded(isExpanded ? false : true);
  };

  const handleInputChange = (
    event: SyntheticInputEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setArtistInput({
      artist: value,
    });
  };

  return (
    <div className="searchArea" onBlur={toggleSearchForm}>
      <div className="magnifier" onClick={toggleSearchForm}></div>
      {isExpanded && (
        <form
          className="searchForm"
          onSubmit={(event: SyntheticEvent<HTMLFormElement>): void => {
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

export default TicketSearch;
