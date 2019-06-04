import React, { Component } from 'react'
import './PlayerList.scss'
import UserService from '../../../service/UserService'

export default class PlayerList extends Component {
    state ={
        playerList :[]
    }
    username =""

    chalengeOpponent=(opponent)=>{
        const {socket} = this.props;
        socket.emit("chalenge",{
            from:this.username,
            to:opponent
        })
    }

    componentDidMount(){
        const token = localStorage.getItem("token").split(" ")[1];

        const username = (JSON.parse(atob(token.split('.')[1]))).username;
        this.username=username;
        const {socket} = this.props;
        socket.emit("login",{username});
        UserService.getUserList()
            .then(res=>{
                this.setState({
                    playerList: res.data.result.filter(item=>item.username!==username)});
            })
            .catch(console.log)
    }


    render() {
        const renderUserList = this.state.playerList.map((item)=>{
            return <div key={item.username}
                onClick={()=>{this.chalengeOpponent(item.username)}}
            >{item.username}</div>
        })
        return (
            <div className="player-list">
                <h3>List of Player</h3>
                <div className="content">
                    {renderUserList}
                </div>
            </div>
        )
    }
}
