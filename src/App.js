import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    monsters: [
      {
        name: 'Bob',
        id: 'asc1'
      },
      {
        name: 'Frankenstein',
        id: 'asc2'
      },
      {
        name: 'Dracula',
        id: 'asc3'
      },
      {
        name: 'Dr. Jekyll',
        id: 'asc4'
      }
    ]
  }
}

  render() {
    return (
      <div className="App">
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}> { monster.name} </h1>)
          )}
          <button onClick={() => this.setState({ string: 'Hey again John'})}>Change Text</button>
      </div>
    );
  }  
}

export default App;
