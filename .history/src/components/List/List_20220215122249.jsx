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
  const [state, setstate] = useState(initialState);
  return (
    <div className={classes.container}>
      <Typography>Restaurants, Hotels & Attractions around you</Typography>
      <FormControl>
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
