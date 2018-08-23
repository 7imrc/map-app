import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class ThirdMap extends Component {
  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap( (props) =>
      <GoogleMap
        defaultZoom = {this.props.zoom}
        defaultCenter = {this.props.center}
      >
        <Marker
          position = {this.props.center}
        />
      </GoogleMap>
    ));

    return(
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRBUF2UVab_IvfyF7rJPQNzWaF8fs-dN8&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}



export default ThirdMap
