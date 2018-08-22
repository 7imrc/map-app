import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render() {
    return(
      <GoogleMap
        defaultZoom = {this.props.zoom}
        defaultCenter = {this.props.center}
      >
        <Marker
          position = {this.props.center}
        />
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
