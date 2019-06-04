import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import PlayScreen from './containers/PlayScreen/PlayScreen';
import LogInScreen from './containers/LogInScreen/LogInScreen';
import Lobby from './containers/Lobby/Lobby';
export default class Routes extends Component {


    renderRouter = (component) =>{
        return localStorage.getItem("token") ? component: <Redirect to="/login" />
    } 
    

    render() {
        return (
            <Switch>
                <Route path="/gameplay" exact render={() => this.renderRouter(<PlayScreen socket={this.props.socket}/>)}></Route>
                <Route path="/login" exact render={({history}) => localStorage.getItem("token") ? <Redirect to="/lobby" /> :<LogInScreen history={history} />} />
                <Route path="/lobby" exact render={({history}) => this.renderRouter(<Lobby history={history} socket={this.props.socket} />)} />
                <Route path="/" render={() => (
                    localStorage.getItem("token") ? (
                        <Redirect to="/lobby" />
                    ) : (
                            <Redirect to="/login" />
                        )
                )} />
                to: string
            </Switch>
        )
    }
}
