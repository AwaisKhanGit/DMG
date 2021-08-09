import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const SubBase = () => {
    return (
    <React.Fragment>
        <Grid item container style={{marginTop:"15rem"}}>
            <Grid item xs={6} >
                <Button variant="contained" color="primary">
                    Field Tests
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="secondary">
                    Lab Tests
                </Button>
            </Grid>
        </Grid>
    </React.Fragment>
    )
}

export default SubBase
