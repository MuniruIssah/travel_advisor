import React from 'react'
import {Box ,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'
const PlaceDetails =({place})=>{

    const classes=useStyles()

    return(
        <Card>
            <CardMedia
            styles={{height:350}}
            image={place.photo?place.photo.images.large.url:'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title={place.name}
            />
            <CardContent>
                <Typography></Typography>

            </CardContent>

        </Card>
    )
}

export default PlaceDetails