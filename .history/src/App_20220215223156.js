import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setCoordinates({ lat: latitude, lng: longitude })
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places?.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredPlaces)
  }, [ratings]);

  useEffect(() => {
    const retrievePlaces = async () => {
      setIsLoading(true);
      const dummyPlaces = await getPlacesData(type, bounds.sw, bounds.ne);
      setPlaces(dummyPlaces.filter(place=>place.name && place.num_reviews>0));
      setIsLoading(false);
    };

    if(bounds.sw && bounds.ne){
      retrievePlaces();

    }
  }, [type, coordinates, bounds]);

  useEffect(() => {
    console.log(places);
  }, [places]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%", marginTop: "5vh" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length>0? filteredPlaces :places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            ratings={ratings}
            setRatings={setRatings}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            places={filteredPlaces.length>0 ? filteredPlaces:places}
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
