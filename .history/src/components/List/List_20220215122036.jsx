import React from 'react'
import {CircularProgress,Grid,Typography,MenuItem,Select,InputLabel} from '@material-ui/core'
import useStyles from './styles'
const List =()=>{
    const classes=useStyles()
    return(
      <div className={classes.container}>
            <Typography>
                Restaurants, Hotels 
            </Typography>
      </div>
    )
}

export default List