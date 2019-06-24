import './ticket-search.css';
import React, {Component} from 'react';

class SearchArea extends Component{
  constructor(props) {
    super(props);
    this.artistInput = null;
    this.state = {
      artist: '',
    };
  }
  handleInputChange(event){
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  render(){
    const {artist} = this.state;
    const {searchTickets, searchForm, toggleSearch, clearSearch} = this.props;
    return(      
      <div className="searchArea" onBlur={toggleSearch}>
        <div className="magnifier" onClick={toggleSearch}></div>
        {
          searchForm && 
            <form
              className="searchForm"
              onSubmit={(event) => {
                  event.preventDefault();
                  searchTickets(artist.toLowerCase());
                }
              }
              autoComplete="off"
            >
              <input
                className="searchInput"
                onChange={this.handleInputChange.bind(this)}
                name="artist"
                value={artist}
                placeholder="artist name"
              /> 
              <button
                onClick={() => {
                  this.setState({
                    artist: ''
                  }, clearSearch);
                }
                }
                className="clearSearch"
                type="button"
                title="clear search..."
              >
                X
              </button>
            </form>
        }
      </div>
    );
  }
}

export default SearchArea;
