import React, { Component } from 'react'
import './Lobby.scss'
import PlayerList from './PlayerList/PlayerList';
import Upgrade from './Upgrade/Upgrade';
import Swal from "sweetalert2";

import initialData from '../../fake-data/data.json';
export default class Lobby extends Component {



    render() {
        const { socket,history } = this.props;
        socket.on("chalenge", (data) => {
            Swal.fire({
                title: 'Chalenge',
                text: `${data.from} chalenges you for a match!`,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Accept',
                cancelButtonText: 'Deny',

            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        {
                            title: 'Accepted',
                            text: `You accepted the match`,
                            type: 'success',
                        }
                    )
                    socket.emit("chalenge-accepted",{from:data.to,to:data.from});
                    socket.emit("initial-castle",{
                        username:data.to,
                        guard1: {
                            hp:initialData.tower[1].Guard.HP,
                            def: initialData.tower[1].Guard.DEF
                        },
                        guard2: {
                            hp:initialData.tower[1].Guard.HP,
                            def: initialData.tower[1].Guard.DEF
                        },
                        castle: {
                            hp:initialData.tower[0].King.HP,
                            def: initialData.tower[0].King.DEF
                        },
                        enemy:data.from
                    })
                    history.push("/gameplay");
                }
                else {
                    Swal.fire(
                        {
                            title: 'Denied',
                            text: `You denied the match`,
                            type: 'error',
                        }
                    )
                    socket.emit("chalenge-denied",{from:data.to,to:data.from})

                }
            })
        })
        socket.on("chalenge-accepted", (data) => {
            Swal.fire(
                {
                    title: 'Accepted',
                    text: `${data.from} accepted the match`,
                    type: 'success',
                }
            )
            socket.emit("initial-castle",{
                username:data.to,
                guard1: {
                    hp:initialData.tower[1].Guard.HP,
                    def: initialData.tower[1].Guard.DEF
                },
                guard2: {
                    hp:initialData.tower[1].Guard.HP,
                    def: initialData.tower[1].Guard.DEF
                },
                castle: {
                    hp:initialData.tower[0].King.HP,
                    def: initialData.tower[0].King.DEF
                },
                enemy:data.from
            })
            history.push("/gameplay");

        })
        socket.on("chalenge-denied", (data) => {
            Swal.fire(
                {
                    title: 'Denied',
                    text: `${data.from} denied the match`,
                    type: 'error',
                }
            )
        })
        return (
            <div className="lobby">
                <PlayerList socket={this.props.socket} />
                <Upgrade />
                <div className="curtain"></div>
            </div>
        )
    }
}
