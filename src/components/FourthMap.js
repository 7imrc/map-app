import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class FourthMap extends Component {
  render() {
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
          defaultZoom = {this.props.zoom}
          defaultCenter = {this.props.center}
        >
          <Marker
            position = {this.props.center}
          />
        </GoogleMap>
    );

    return(
      <MyMapComponent />
    )
  }
}

export default FourthMap
