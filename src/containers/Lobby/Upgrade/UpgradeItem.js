import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

export default class UpgradeItem extends Component {
    render() {
        return (
            <Grid item xs={4} >
                <div className="troop-upgrade">
                    <img src={require(`../../../assets/img/${this.props.name}.png`)} alt="troops" width="100%" height="400px" />
                    <div className="troop-info">{this.props.name}</div>
                </div>

            </Grid>
        )
    }
}
