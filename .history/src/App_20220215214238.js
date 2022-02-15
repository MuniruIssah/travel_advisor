import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null)
const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setCoordinates({ lat: latitude, lng: longitude })
    );
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    const retrievePlaces = async () => {
      setIsLoading(true)
      const dummyPlaces = await getPlacesData(bounds.sw,bounds.ne);
      setPlaces(dummyPlaces);
      setIsLoading(false)
    };

    retrievePlaces();
  }, [coordinates, bounds]);

  useEffect(() => {
    console.log(places);
  }, [places]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%", marginTop: "5vh" }}>
        <Grid item xs={12} md={4}>
          <List places={places}  childClicked={childClicked} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
          places={places}
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
