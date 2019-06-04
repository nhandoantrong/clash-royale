import React, { Component } from 'react';
import Building from './Building/Building';
import './Team.scss';
import Grid from '@material-ui/core/Grid'
class Team extends Component {
    render() {
        return (
            <div className="team">
                <h1>{this.props.teamName}</h1>
                <Grid container className="team-content">
                    {!this.props.isEnemy ? <Building buildingName="castle" /> : ""}
                    <Building buildingName="defense-tower" />
                    <Building buildingName="defense-tower" />
                    {this.props.isEnemy ? <Building buildingName="castle" /> : ""}

                </Grid>
            </div>
        );
    }
}

export default Team;