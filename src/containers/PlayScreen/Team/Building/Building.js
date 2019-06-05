import React, { Component } from 'react';
import './Building.scss'
import  Grid  from '@material-ui/core/Grid';

const HealthBar = ({maxHP,hp}) =>{
    return (
        <div className="progress">
            <div className="progress-bar" style={{width:`${hp/maxHP*100}%`}}></div>
        </div>
    )
}

class Building extends Component {
    render() {
        return (
            <Grid className="building" xs={4} item>
                <img src = {require(`../../../../assets/img/${this.props.buildingName}.png`)} alt="building"></img>
                <HealthBar maxHP={this.props.maxHP} hp={this.props.hp}/>
            </Grid>
        );
    }
}

export default Building;