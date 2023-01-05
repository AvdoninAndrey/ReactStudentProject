import './app.css';

import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploessList from '../emploees-list/emploess-list';
import Form from '../form-add-emploee/form-add-emploee';

import dataEmploees from '../data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataEmploees,
      maxId: 4,
      searchText: '',
    };
  }
  deleteEmploees = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((emploees) => emploees.id !== id),
    }));
  };
  onAddEmploees = (nameEmploee, salaryEmploee) => {
    const newObjEmploee = {
      nameEmploee,
      salaryEmploee,
      increase: false,
      like: false,
      id: this.state.maxId + 1,
    };
    this.setState(({ data }) => {
      const newDataEmploess = [...data, newObjEmploee];
      return {
        data: newDataEmploess,
        maxId: this.state.maxId + 1,
      };
    });
  };
  onToggleProp = (prop, id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmploee(text, data) {
    if (text.lenght === 0) {
      return data;
    }
    return data.filter((item) => item.nameEmploee.indexOf(text) > -1);
  }

  onSearch = (text) => {
    this.setState(({ data, searchText }) => ({
      data: this.searchEmploee(text, data),
      searchText: text,
    }));
  };

  render() {
    return (
      <div className="app">
        <AppInfo data={this.state.data} />
        <div className="search-and-filter">
          <SearchPanel onSearch={this.onSearch} />
          <AppFilter />
        </div>
        <EmploessList
          data={this.state.data}
          onDelete={this.deleteEmploees}
          onToggleProp={this.onToggleProp}
        />
        <Form onAdd={this.onAddEmploees} />
      </div>
    );
  }
}

export default App;
