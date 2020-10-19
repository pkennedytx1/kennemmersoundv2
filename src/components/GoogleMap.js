import React, { Component } from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
  
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.281230,
      lng: -97.749770
    },
    zoom: 15
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDaqsjA0uTjruR6JHczKWX-pIqy1cj0AzA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            <OverlayTrigger
            lat={30.281230}
            lng={-97.749770}
            key={'top'}
            placement={'top'}
            overlay={
                <Tooltip id={`tooltip-top`}>
                    1603 Shoal Creek Blvd, Austin, TX 78701
                </Tooltip>
            }
            >
            <Button target="_blank" href="https://www.google.com/maps/dir//BL%26S,+1603+Shoal+Creek+Blvd,+Austin,+TX+78701/@30.2812589,-97.7498626,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8644b54189a4c975:0xb1854b2cb002cd4d!2m2!1d-97.7498626!2d30.2812589!3e0" 
                style={{ borderRadius: '14px', paddingTop: '12px', paddingBottom: '12px'}}variant="secondary">
                <img alt='Kennemmer Sound Design Logo'src="J! Logo.png" width="50" heigh="50" />
            </Button>
            </OverlayTrigger>
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;