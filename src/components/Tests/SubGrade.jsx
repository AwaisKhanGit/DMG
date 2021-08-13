import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TestAccordians from '../ui/TestAccordians';

const SubGrade = () => {

    return (
    <React.Fragment>
        <Grid item container style={{marginTop:"10rem"}}>
            <Grid item container xs={6} >
                <Button variant="contained" color="primary"  style={{margin:"auto"}}>
                    Field Tests
                </Button>
            </Grid>
            <Grid item container xs={6}>
                <Button variant="contained" color="secondary" style={{margin:"auto"}}>
                    Lab Tests
                </Button>
            </Grid>


            <Grid item container justifyContent="space-around" style={{marginTop:"2rem"}}>
                <Grid item xs={6} style={{maxWidth:"40%"}}>
                    <TestAccordians/>
                </Grid>
                <Grid item xs={6} style={{maxWidth:"40%"}}>
                    <TestAccordians/>
                </Grid>
                <Grid item xs={6} style={{maxWidth:"40%"}}>
                    <TestAccordians/>
                </Grid>
                <Grid item xs={6} style={{maxWidth:"40%"}}>
                    <TestAccordians/>
                </Grid>
            </Grid>

            
        </Grid>
    </React.Fragment>
    )
}

export default SubGrade
