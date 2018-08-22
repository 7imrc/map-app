import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchList from './components/SearchList';
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchList />
        <div style={{width: 600, height: 600, background: "red"}}>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
