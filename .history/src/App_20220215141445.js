import React,{useEffect, useState} from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import {getPlacesData} from './api'

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates]=useState({lat:0,lng:0})
  const [bounds,setBounds]=useState({})

  useEffect(() => {
   navigator.geolocation.getCurrentPosition(({coords:{lati}})=>)
  }, []);

  useEffect(() => {
    console.log(coordinates,bounds)
    const retrievePlaces= async()=>{
      const dummyPlaces= await getPlacesData();
      setPlaces(dummyPlaces)
    }

    retrievePlaces()
  }, [coordinates,bounds])

  useEffect(() => {
    console.log(places)
  }, [places])
  
  
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%",marginTop:'5vh' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
