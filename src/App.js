import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchList from './components/SearchList';
import Map from './components/Map';
import OtherMap from './components/OtherMap';
import ThirdMap from './components/ThirdMap';
import FourthMap from './components/FourthMap';

class App extends Component {

  state = {
    position: {
      lat: 40.7575285,
      lng: -73.9884469
    }
  }


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
            center = {this.state.position}
            zoom = {12}
            containerElement = {<div style={{height: `100%`, width: `100%`}} />}
            mapElement = {<div style={{ height: `100%` }} />}
          />
        </div>
        <OtherMap
          center = {this.state.position}
          zoom = {15}
        />
        <ThirdMap
          center = {this.state.position}
          zoom = {15}
        />
        <FourthMap
          center = {this.state.position}
          zoom = {15}
        />
      </div>
    );
  }
}

export default App;
