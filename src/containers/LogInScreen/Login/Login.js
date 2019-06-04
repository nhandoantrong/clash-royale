import React, { Component } from 'react'
import InputText from '../../../components/InputText';
import userService from '../../../service/UserService';

import './Login.scss'
import Swal from 'sweetalert2';

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    changeField = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = () => {
        const { history } = this.props;
        Swal.fire({
            text: "Sending request",
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        });
        userService.login(this.state.username, this.state.password)
            .then(res => {
                const token = res.data.result.token
                if (token) {
                    localStorage.setItem("token", token);
                    Swal.fire({type:"success",title:"Login successfully"})
                    history.push("/lobby");
                }
                else {
                    Swal.fire({type:"error",title:"Wrong username or password"})

                }
            })
            .catch(err =>{
                Swal.fire({type:"error",title:"Something went wrong"})

            })
    }

    render() {
        return (
            <div className="login">
                <h1>LOGIN</h1>
                <form>
                    <InputText name="username" label="Username" changeField={this.changeField} type="text" />
                    <InputText name="password" label="Password" changeField={this.changeField} type="password" />
                </form>

                <div className="button16 my-btn" onClick={this.handleOnSubmit}><span>Login</span></div>
                <div className="button16 my-btn" onClick={() => { this.props.changeState() }}><span>Do not have an account ?</span></div>

            </div>
        )
    }
}
