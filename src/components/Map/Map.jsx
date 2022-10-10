import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');

    const coordinates = { lat: 0, lng: 0};

    return(
        <div className = {classes.mapContainer}>
            <GoogleMapReact
                //api key 
                bootstrapURLKeys = {{ key: 'AIzaSyAowhBaneGZ1GyV5ijHcnfij-v7X9fZgcw' }}

                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50,50,50,50]}
                options = {''}

                //changing the map
                onChange = {''}

                //used to click on resturants on the map
                onChildClick = {''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;