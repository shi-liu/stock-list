import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    ...theme.mediaComp
})


/*
Formats the card component based on each project.
Displays the dialog box on card click
*/
function MediaCard({ classes, feature }){

    return (
        <Card className={classes.root}> 

                <CardContent className={classes.contentRoot}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.mediaTitle}>
                        {feature.title}
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.basicFont}>
                        {feature.description}
                    </Typography>
                </CardContent>

        </Card>
    );
};

export default withStyles(styles)(MediaCard);