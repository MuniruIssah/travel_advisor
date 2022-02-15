import React,{useState} from "react";
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
  const [type, setType] = useState();
  return (
    <div className={classes.container}>
      <Typography>Restaurants, Hotels & Attractions around you</Typography>
      <FormControl cla>
        <InputLabel>Type</InputLabel>
        <Select>
          <MenuItem  value='restaurants'>Restaurants</MenuItem>
          <MenuItem  value='hotels'>Hotels</MenuItem>
          <MenuItem  value='attractions'>Attractions</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
