import React from 'react'
import {Box ,Typography,Button,Card,CardMedia,CardContent,CardActionArea} from '@material-ui/core'
const PlaceDetails =({place})=>{
    console.log(place)
    return(
        <h1>{place.name}</h1>
    )
}

export default PlaceDetails