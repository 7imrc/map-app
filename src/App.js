import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchList from './components/SearchList';
import Map from './components/Map';

class App extends Component {




  render() {

      const location = {
        lat: 40.7575285,
        lng: -73.9884469
      }

    return (
      <div className="App">
        
        <SearchList />
        <div style={{width: 600, height: 600, background: "red"}}>
          <Map
            center = {location}
            zoom = {12}
            containerElement = {<div style={{height: `100%`, width: `100%`}} />}
            mapElement = {<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
