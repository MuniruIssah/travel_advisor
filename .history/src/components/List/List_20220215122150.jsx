import React from "react";
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
const List = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography>Restaurants, Hotels & Attractions around you</Typography>
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Select>
          <MenuItem>restaurants</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
