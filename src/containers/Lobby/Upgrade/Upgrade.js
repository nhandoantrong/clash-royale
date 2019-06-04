import React, { Component } from 'react'
import "./Upgrade.scss"
import UpgradeItem from './UpgradeItem';
import Grid from '@material-ui/core/Grid';
export default class Upgrade extends Component {
    render() {
        return (
            <div className = "upgrade">
                <h1>UPGRADE YOUR POWER</h1>
                <div>
                    <h2 style={{paddingBottom:"10px"}}>Tower</h2>
                    <Grid container spacing={8}>
                        <UpgradeItem name="defense-tower"/>
                        <UpgradeItem name="castle"/>
                    </Grid>
                </div>
                <div>
                    <h2 style={{paddingBottom:"10px"}}>Troops</h2>
                    <Grid container spacing={8}>
                        <UpgradeItem name="pawn"/>
                        <UpgradeItem name="bishop"/>
                        <UpgradeItem name="knight"/>
                        <UpgradeItem name="rook"/>
                        <UpgradeItem name="prince"/>
                        <UpgradeItem name="queen"/>
                    </Grid>
                </div>
            </div>
        )
    }
}
