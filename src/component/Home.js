import React, { Component } from 'react';
import Service from '../component/service/Service';
import Provider from '../component/provider/Provider'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Home extends Component {
    state = {
    }

    render() {
        return (
            <Grid container style={{ flexGrow: 1 , marginLeft:'50px'}}>
                <Grid item xs={12}>
                    <Grid container  spacing={2}>
                        <Grid item xs={4}>
                            <Paper>
                            <Service />
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper  >
                                <Provider />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    };
}

export default Home;
