import React from 'react'
import {Autocomplete} from '@react-google-maps/api'
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core'
const Header =()=>{
    return(
        <AppBar postion='static'>
            <Toolbar>
                <Typography variant ="h5">
                    Travel Advisor
                </Typography>
                <Box>
                <Typography>
                    Explore New Places
                </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header