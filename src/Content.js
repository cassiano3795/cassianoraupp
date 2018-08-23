import React, { Component } from 'react';
import Grid from './Grid';

class Content extends Component {
    render() {
        return (
            <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
                <Grid></Grid>
            </div>
        );
    }
}

export default Content