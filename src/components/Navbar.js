import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    ...theme.navComp
})


/*
Navbar based on material ui's component
Used a scroll library for easy static page navigation
*/
function Navbar(){
   
    return (
        <section id="navbar">
            <AppBar position="static">
                <Toolbar style={{background: "black"}}>
                    <Typography style={{fontFamily: "Nunito", fontSize:"40px"}}> Stock List </Typography>
                </Toolbar>
            </AppBar>
        </section>
    )
}

export default withStyles(styles)(Navbar);