import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { AmplifySignOut } from '@aws-amplify/ui-react'

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
                    <div style={{maxWidth: "50px", right: "10%", position: "absolute"}}>
                        <AmplifySignOut/>
                    </div>
                </Toolbar>
            </AppBar>
        </section>
    )
}

export default withStyles(styles)(Navbar);