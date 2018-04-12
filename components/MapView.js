import React from 'react';
import GoogleMapReact from 'google-map-react';
const config = require('../config');

/**
 * Render the marker element for each map location
 *
 * @param text
 * @returns {*}
 * @constructor
 */
const Marker = ({ text }) => (
  <div className='location'>
    <a href="#"></a>
    <div className="description">{text}</div>
  </div>
);

/**
 * The map view for the results map tab
 */
class MapView extends React.Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.mapsApiKey }}
          defaultCenter={this.props.addresses[0].geometry.location}
          defaultZoom={11}
        >
          {this.props.addresses.map((address, index) => (
            <Marker
              key={index}
              lat={address.geometry.location.lat}
              lng={address.geometry.location.lng}
              text={address.formatted_address}
            />
          ))}
        </GoogleMapReact>

        <style jsx="true">{`
          .location {
            position: relative;
          }
          .location a {
            display: block;
            background-color: red;
            width: 15px;
            height: 15px;
            border-radius: 7.5px;
          }
          .location .description {
            padding: 5px;
            border-radius: 5px;
            display: block;
            background-color: rgba(255, 255, 255, 0.8);
            position: absolute;
            top: 7.5px;
            left: 7.5px;
            width: 100px;
            height: auto;
            box-shadow: 3px 3px 2px 0px rgba(0,0,0,0.48);

          }
        `}</style>
      </div>
    );
  }
}

export default MapView;