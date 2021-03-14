import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../components/MediaCard';
import feature from '../static/feature';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    ...theme.featureComp
});

function Features({ classes }){
    return (
      <div>
        <Grid container direction="row" justify="flex-end" alignItems="center">
            <Grid container justify="flex-end" style={{ backgroundColor:"#dcd2cc"}}>
                <Grid item  style={{margin: "25px", maxWidth: "275px"}}>
                    <Typography>
                        g industry. Lore text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Grid>
                <MediaCard feature={feature[0]}/>
            </Grid>
            <Grid container>
                <MediaCard feature={feature[0]}/>
                <Grid item  style={{margin: "25px", maxWidth: "275px"}}>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="flex-end" style={{backgroundColor:"#dcd2cc",}}>
                <Grid item align="right" style={{margin: "25px", maxWidth: "275px" }}>
                    <Typography>
                    Lorem esetting  Ipsum is simp Ipsum is simply d Ipsum is simply dly d Ipsum is simply dindum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </Typography>                        
                </Grid >
                <MediaCard feature={feature[2]}/>        
            </Grid>
        </Grid>
      </div>  
    )
}

export default withStyles(styles)(Features);