import './ticket-search.css';
import React, {Component} from 'react';
import searchIcon from './search_icon.png';


class SearchArea extends Component{
  constructor(props) {
    super(props);
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
    const {searchTickets} = this.props;
    return(      
      <form className="searchArea" onSubmit={(event) => {
          event.preventDefault();
          searchTickets(artist);
        }
      }>
        <img className="searchIcon" src={searchIcon} alt="search"/>
        <input
          onChange={this.handleInputChange.bind(this)}
          name="artist"
          value={artist}
          placeholder="artist name"
        />
        <button type="button" title="clear search...">x</button>
      </form>
    );
  }
}

export default SearchArea;
