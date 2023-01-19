import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }
  onUpdateSearch = (event) => {
    const inputText = event.target.value;
    this.setState({
      searchText: inputText,
    })
    this.props.onUpdateSearch(inputText);
  }

  render() {
    

  return (
    <div className="search-panel">
      <input
        className="form-control search-input"
        type="text"
        placeholder="Найти сотрудника"
        value={this.state.searchText}
        onChange={this.onUpdateSearch}
      />
    </div>
  );
  }
}



export default SearchPanel;
