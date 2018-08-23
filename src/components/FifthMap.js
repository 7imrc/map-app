import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


    const MyMapComponent = compose(

      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRBUF2UVab_IvfyF7rJPQNzWaF8fs-dN8&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
      }),
      withScriptjs,
      withGoogleMap
    )(
      (props) =>
        <GoogleMap
          defaultZoom = {8}
          defaultCenter = {{ lat: 40.7575285, lng: -73.9884469 }}
        >
          <Marker
            position = {props.zoom}
          />
        </GoogleMap>
    );

class FifthMap extends Component {
  render() {
    return(
      <MyMapComponent />
    )
  }
}

export default FifthMap
