import React, { Component } from 'react'
import "./LogInScreen.scss"
import Login from './Login/Login';
import Register from './Register/Register';

export default class LogInScreen extends Component {
    state ={
        login: true
    }

    changeState = () =>{
        this.setState({
            login:!this.state.login
        })
    }

    render() {
        return (
            <div className="login-screen">
                {this.state.login? <Login changeState={this.changeState} {...this.props}/> : <Register {...this.props} changeState={this.changeState}></Register> }
            </div>
        )
    }
}
