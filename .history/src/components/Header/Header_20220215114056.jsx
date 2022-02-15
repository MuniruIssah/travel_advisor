import React from 'react'
import {Autocomplete} from '@react-google-maps/api'
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core'
const Header =()=>{
    return(
        <AppBar postion='static'>
            <Toolbar>
                <Typography>
                    Travel Advisor
                </Typography>
                <Box>
                <Typography>
                    Travel Advisor
                </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header