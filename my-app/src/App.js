import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav>
          <h1 className="App-title">Vans Rebuild</h1>
        </Nav>
        <p className="App-intro">
        My React App
        </p>
      </div>
    );
  }
}

export default App;
