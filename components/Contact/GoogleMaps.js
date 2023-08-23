import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import PropTypes from 'prop-types';

const apiKey = 'AIzaSyCvetqDPTxK7Hfgx5iE9P9LwmjXZTnwlXs';

const GoogleMaps = GoogleApiWrapper({
    apiKey,
})(property => {
    const { latitude, longitude, google, zoom, place, styles } = property;

    const [state, setState] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    });

    const onMarkerClick = (props, marker) => setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    const onMapClicked = () => {
        if (state.showingInfoWindow) {
            setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    const onInfoWindowClose = () => {
        setState({
            showingInfoWindow: false
        });
    };

    return (
        <Map
            onClick={onMapClicked}
            google={google}
            className="map"
            style={styles}
            center={{ lat: latitude, lng: longitude }}
            zoom={zoom}
            height="400px"
            width="100%"
            id="google-map"
        >
            <Marker
                onClick={onMarkerClick}
                position={{ lat: latitude, lng: longitude }}
                icon="/assets/images/map-marker-blue.png"
            />

            <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
                <div>
                <div id="content">
                    <div id="siteNotice" />
                    <h4 id="firstHeading" className="firstHeading">
                    Naxos Main Office
                    </h4>
                    <div id="bodyContent">
                    <p>
                        Donec arcu nulla, semper et urna ac, laoreet porta.
                        <br />
                        Vivamus sodales efficitur massa at rhoncus.
                    </p>
                    </div>
                </div>
                </div>
            </InfoWindow>
        </Map>
    );
});

GoogleMaps.defaultProps = {
    latitude: '37.800976',
    longitude: '-122.428502',
    zoom: 10,
    styles: {
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    }
};

GoogleMaps.propTypes = {
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    google: PropTypes.string,
    zoom: PropTypes.number,
    place: PropTypes.arrayOf(PropTypes.object),
};

export default GoogleMaps;
