import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 600px)');

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
                onChange = {(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}

                //used to click on resturants on the map
                onChildClick = {''}
            >
                {places?.map((place,i) => (
                    <div className = {classes.markerContainer} lat = {Number(place.latitude)} lng = {Number(place.longitude)} key = {i}>
                        {
                            isMobile ? (
                                <LocationOnOutlinedIcon color = "primary" fontSize = "large" />
                            ) : (
                                <Paper elevation = {3} className = {classes.paper}>
                                    <Typography gutterBottom className = {classes.typography} variant = "subtitle2">{place.name}</Typography>
                                    <img 
                                        className = {classes.pointer} 
                                        src = {place.photo ? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt = {place.name}
                                    />
                                    <Rating size = "small" value = {Number(place.rating)} readOnly/>
                                </Paper>
                            )
                        }
                    </div>
                ))}

            </GoogleMapReact>
        </div>
    );
}

export default Map;