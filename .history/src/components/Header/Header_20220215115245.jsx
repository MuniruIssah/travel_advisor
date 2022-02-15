import React from 'react'
import {Autocomplete} from '@react-google-maps/api'
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import use
const Header =()=>{
    return(
        <AppBar postion='static'>
            <Toolbar className={classes.title}>
                <Typography variant ="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display='flex'>
                <Typography variant='h6' className={classes.title}>
                    Explore New Places
                </Typography>
                <Autocomplete>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                                <SearchIcon/>

                        </div>
                        <InputBase placeholder="Search ..." classes={{root:classes.inputRoot,input :classes.inputInput}}/>
                    </div>
                </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header