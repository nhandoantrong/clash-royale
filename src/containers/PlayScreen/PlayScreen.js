import React, { Component } from 'react';
import Team from './Team/Team';
import Grid from '@material-ui/core/Grid'

import './PlayScreen.scss'
import ManaPool from './ManaPool/ManaPool';
import TroopBoard from './TroopBoard/TroopBoard';
class PlayScreen extends Component {
    render() {
        return (
            <div className="play-screen">
                <Grid container >
                    <Grid item xs={6}  >
                        <Team teamName="Your Team" isEnemy={false}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Team teamName="Enemy Team" isEnemy={true} />
                    </Grid>
                </Grid>
                <ManaPool />
                <TroopBoard />
            </div>


        );
    }
}

export default PlayScreen;