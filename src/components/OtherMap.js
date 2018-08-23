import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class OtherMap extends Component {

  render() {
    const MapWithAMarker = withGoogleMap ( (props) =>
      <GoogleMap
        defaultZoom = {this.props.zoom}
        defaultCenter = {this.props.center}
      >
        <Marker
          position = {this.props.center}
        />
      </GoogleMap>
    );

      return (
        <MapWithAMarker
          containerElement = {<div style={{ height: `400px` }} />}
          mapElement = {<div style={{ height: `100%` }} />}
        />
      )
  }
}

export default OtherMap
