import React, { Component } from 'react'
import Troop from './Troop/Troop';
import { Grid } from '@material-ui/core';
import './TroopBoard.scss';
import data from '../../../fake-data/data.json';
export default class TroopBoard extends Component {
    render() {
        const renderTroop = data.troops.map((troop, index) => {
            return (
                <Grid item xs={2} style={{padding : "0 5px"}} key={index}>
                    <Troop attack={this.props.attack}  troop={troop} />
                </Grid>
            )
        })
        return (
            <Grid container className="troop-board">
                {renderTroop}

            </Grid>
        )
    }
}
