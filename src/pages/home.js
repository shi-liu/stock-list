import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Features from '../components/Features';
import Navbar from '../components/Navbar';

const styles = theme => ({
    ...theme.homeComp
});

function Home({classes}){
    return (
        <div className={classes.root}>
            <Navbar/>

            <Grid container justify="center" alignItems="center">

                <Grid item style={{maxWidth:"65%"}}>
                    <Features/>
                </Grid>

              
            </Grid>
        
        </div>
    )
};



export default withStyles(styles)(Home);