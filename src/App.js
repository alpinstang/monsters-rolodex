import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // Define context of functions here so we can access 'this'
    // alternatively, use arrow functions to avoid cluttering constructor
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // the arrow function allows for lexiccal scoping,
  // removing need to bind 'this' in cnnstructor
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBar
          placeholderText="Search Monsters..."
          handleChange={(e) => this.handleChange(e)}
        />
        <CardList name="Card List Component" monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
