import React, { Component } from 'react';
import Building from './Building/Building';
import './Team.scss';
import Grid from '@material-ui/core/Grid'
class Team extends Component {
    render() {
        const { team, teamHP } = this.props;
        return (
            <div className="team">
                <h1>{this.props.teamName}</h1>
                <Grid container className="team-content">
                    {this.props.isEnemy ?
                        <>
                            <Building buildingName="defense-tower" maxHP={team.guard1 ? team.guard1.hp : 1} hp={teamHP ? teamHP.guard1 : 1} />
                            <Building buildingName="defense-tower" maxHP={team.guard2 ? team.guard2.hp : 1} hp={teamHP ? teamHP.guard2 : 1} />
                            <Building buildingName="castle" maxHP={team.castle ? team.castle.hp : 1} hp={teamHP ? teamHP.castle : 1} />
                        </> :
                        <>
                            <Building buildingName="castle" maxHP={team.castle ? team.castle.hp : 1} hp={teamHP ? teamHP.castle : 1} />
                            <Building buildingName="defense-tower" maxHP={team.guard2 ? team.guard2.hp : 1} hp={teamHP ? teamHP.guard2 : 1} />
                            <Building buildingName="defense-tower" maxHP={team.guard1 ? team.guard1.hp : 1} hp={teamHP ? teamHP.guard1 : 1} />
                        </>}
                </Grid>
            </div>
        );
    }
}

export default Team;