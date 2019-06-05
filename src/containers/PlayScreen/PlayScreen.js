import React, { Component } from 'react';
import Team from './Team/Team';
import Grid from '@material-ui/core/Grid'

import './PlayScreen.scss'
import ManaPool from './ManaPool/ManaPool';
import TroopBoard from './TroopBoard/TroopBoard';
import initialData from '../../fake-data/data.json';
import Swal from "sweetalert2";

class PlayScreen extends Component {
    state = {
        enemyTeam: {},
        myTeam: {
            guard1: {
                hp: initialData.tower[1].Guard.HP,
                def: initialData.tower[1].Guard.DEF
            },
            guard2: {
                hp: initialData.tower[1].Guard.HP,
                def: initialData.tower[1].Guard.DEF
            },
            castle: {
                hp: initialData.tower[0].King.HP,
                def: initialData.tower[0].King.DEF
            },
        },
        myTeamHP: {
            guard1: initialData.tower[1].Guard.HP,
            guard2: initialData.tower[1].Guard.HP,
            castle: initialData.tower[0].King.HP
        },
        enemyHP: {

        }
    }

    componentDidMount() {
        const { socket } = this.props;
        socket.on("initial-castle", (data) => {
            this.setState({
                enemyTeam: data,
                myTeam: { ...this.state.myTeam, username: data.enemy, enemy: data.username },
                enemyHP: {
                    guard1: data.guard1.hp,
                    guard2: data.guard2.hp,
                    castle: data.castle.hp,
                }
            }, () => {
                console.log(this.state);
            })
        })
        socket.on("attack",data=>{
            this.setState({
                myTeamHP:this.gettingDmg(data.dmg)
            })
        })

    }

    gettingDmg =(dmg) =>{
        const teamHp= {...this.state.myTeamHP};
        if (teamHp.guard1>0)
        {
            teamHp.guard1-= dmg>this.state.myTeam.guard1.def? dmg-this.state.myTeam.guard1.def :0;
            if (teamHp.guard1<0) teamHp.guard1=0;
        }
        else if (teamHp.guard2>0){
            teamHp.guard2-= dmg>this.state.myTeam.guard2.def? dmg-this.state.myTeam.guard2.def :0;
            if (teamHp.guard2<0) teamHp.guard2=0;

        }
        else if (teamHp.castle>0)
        {
            teamHp.castle-= dmg>this.state.myTeam.castle.def? dmg-this.state.myTeam.castle.def :0;
            if (teamHp.castle<=0) {
                teamHp.castle=0;
                Swal.fire({
                    title:"You lose",
                    type: 'warning',
                }).then((result) => {
                    if (result.value) {
                      Swal.close();
                      this.props.history.push("/lobby")
                    }
                  })
            }
        }
        return teamHp
    }

    attack = (dmg) =>{
        const { socket } = this.props;
        socket.emit("attack",{
            from:this.state.enemyTeam.enemy,
            to:this.state.enemyTeam.username,
            dmg
        })
        this.setState({
            enemyHP:this.causeDmg(dmg)
        })
        
    }

    causeDmg = (dmg) =>{
        const teamHp= {...this.state.enemyHP};
        if (teamHp.guard1>0)
        {
            teamHp.guard1-= dmg>this.state.myTeam.guard1.def? dmg-this.state.myTeam.guard1.def :0;
            if (teamHp.guard1<0) teamHp.guard1=0;
        }
        else if (teamHp.guard2>0){
            teamHp.guard2-= dmg>this.state.myTeam.guard2.def? dmg-this.state.myTeam.guard2.def :0;
            if (teamHp.guard2<0) teamHp.guard2=0;

        }
        else if (teamHp.castle>0)
        {
            teamHp.castle-= dmg>this.state.myTeam.castle.def? dmg-this.state.myTeam.castle.def :0;
            if (teamHp.castle<=0) {
                
                teamHp.castle=0;
                Swal.fire({
                    title:"You win",
                    type: 'success',
                }).then((result) => {
                    if (result.value) {
                      Swal.close();
                      this.props.history.push("/lobby")
                    }
                  })
            }
        }
        return teamHp
    }

    render() {
        return (
            <div className="play-screen">
                <Grid container >
                    <Grid item xs={6}  >
                        <Team teamName={this.state.enemyTeam.enemy} team={this.state.myTeam} teamHP={this.state.myTeamHP} isEnemy={false} />
                    </Grid>
                    <Grid item xs={6}>
                        <Team teamName={this.state.enemyTeam.username} team={this.state.enemyTeam} teamHP={this.state.enemyHP} isEnemy={true} />
                    </Grid>
                </Grid>
                <ManaPool />
                <TroopBoard attack={this.attack}/>
            </div>


        );
    }
}

export default PlayScreen;