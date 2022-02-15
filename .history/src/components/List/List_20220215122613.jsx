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
  const [type, setType] = useState('');
  const [ratings, setRatings] = useState('');

  return (
    <div className={classes.container}>
      <Typography>Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem  value='restaurants'>Restaurants</MenuItem>
          <MenuItem  value='hotels'>Hotels</MenuItem>
          <MenuItem  value='attractions'>Attractions</MenuItem>
          
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem  value={0}>All</MenuItem>
          <MenuItem  value={3}>Above 3.0</MenuItem>
          <MenuItem  value={4}>Above 4.0</MenuItem>
          <MenuItem  value={4.5}>Above 4.5</MenuItem>

          
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
