import React, { useState, useEffect } from 'react';
import {CssBaseline, Grid} from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
    const [places, setPlaces] = useState();
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    const [filterPlaces, setFilter] = useState([]);

    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState('');

    //used to set default coordinates to user location 

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(( {coords: {latitude, longitude} }) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []); 

    //used to filter ratings
    useEffect(() => {
        const filterPlaces = places.filter((place) => place.rating > rating);
        
        setFilter(filterPlaces);
    }, [rating]);

    //used to update coordinate data based on map location and for location type 
    useEffect(() => {
        getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data);
                setFilter([]);
            })
    }, [type, coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing = {3} style = {{ width: '100%' }}>
                <Grid item xs = {12} md = {4}>
                    <List 
                        places = {filterPlaces.length ? filterPlaces: places}
                        type = {type}
                        setType = {setType}
                        rating = {rating}
                        setRating = {setRating} 
                    />
                </Grid>
                <Grid item xs = {12} md = {8}>
                    <Map 
                        setCoordinates = {setCoordinates}
                        setBounds = {setBounds}
                        coordinates = {coordinates}
                        places = {filterPlaces.length ? filterPlaces: places}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;