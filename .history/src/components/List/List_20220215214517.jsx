import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from "./../PlaceDetails/PlaceDetails";
const List = ({ places, childClicked,isLoading }) => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [elRefs, setElRefs] = useState([]);

  console.log({ childClicked });

  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography>Restaurants, Hotels & Attractions around you</Typography>
      {
        isLoading?(
          <div className={classes.loading}> 
          <CircularProgress size="5rem"/></div>
        ):
        (
          <>
          </>

        )
      }
      
    </div>
  );
};

export default List;
