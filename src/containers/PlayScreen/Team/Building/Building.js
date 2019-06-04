import React, { Component } from 'react';
import './Building.scss'
import  Grid  from '@material-ui/core/Grid';

const HealthBar = () =>{
    return (
        <div className="progress">
            <div className="progress-bar"></div>
        </div>
    )
}

class Building extends Component {
    render() {
        return (
            <Grid className="building" xs={4} item>
                <img src = {require(`../../../../assets/img/${this.props.buildingName}.png`)} alt="building"></img>
                <HealthBar />
            </Grid>
        );
    }
}

export default Building;