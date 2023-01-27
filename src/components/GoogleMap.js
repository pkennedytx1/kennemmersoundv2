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
            lat={30.275375}
            lng={-97.728495}
            key={'top'}
            placement={'top'}
            overlay={
                <Tooltip id={`tooltip-top`}>
                    1011 E 15th St, Austin, TX 78702
                </Tooltip>
            }
            >
            <Button target="_blank" href="https://www.google.com/maps/dir//1011+E+15th+St,+Austin,+TX+78702/@30.2751906,-97.7285438,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8644b5bd0ceb7327:0xcb9bd65be1b7678a!2m2!1d-97.7285438!2d30.2751906!3e0" 
                style={{ borderRadius: '14px', paddingTop: '12px', paddingBottom: '12px', position: 'absolute', top: '-25px', left: '-35px'}} variant="secondary">
                <img alt='Kennemmer Sound Design Logo'src="J! Logo.png" width="50" heigh="50" />
            </Button>
            </OverlayTrigger>
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;