import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
constructor() {
  super();

  this.state = {
    monsters: [{}]
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then( response => response.json())
  .then(users =>  this.setState({monsters: users}))
}

  render() {
    return (
      <div className="App">
        <SearchBar />
        <CardList name="Card List Component" monsters={this.state.monsters} />        
      </div>
    );
  }  
}

export default App;
