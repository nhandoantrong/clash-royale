import React, { Component } from 'react'
import InputText from '../../../components/InputText';
import userService from '../../../service/UserService';
import Swal from "sweetalert2";

export default class Register extends Component {

    state = {
        username: "",
        password: "",
        passwordConfirm: ""
    }

    changeField = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = () => {
        const {history} = this.props;
        Swal.fire({
            text: "Sending request",
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        });
        if (this.state.password === this.state.passwordConfirm) {
            userService.register(this.state.username, this.state.password)
                .then(res => {
                    const token = res.data.result.token
                    if (token) {
                        localStorage.setItem("token", token);
                        Swal.fire({type:"success",title:"Register Successfully"});
                        history.push("/lobby")
                    }
                    else {
                        Swal.fire({type:"error",title:"Username not available"})
                    }
                })
                .catch(err => {
                    Swal.fire({ type: "error", title: "Something went wrong" })

                })
        }
        else {
            Swal.fire({ type: "error", title: "password not match" })

        }
    }

    render() {
        return (
            <div className="login">
                <h1>Register</h1>
                <form>
                    <InputText name="username" label="Username" changeField={this.changeField} type="text" />
                    <InputText name="password" label="Password" changeField={this.changeField} type="password" />
                    <InputText name="passwordConfirm" label="Password Confirm" changeField={this.changeField} type="password" />

                </form>

                <div className="button16 my-btn" onClick={this.handleOnSubmit}><span>Register</span></div>
                <div className="button16 my-btn" onClick={() => { this.props.changeState() }}><span>Already have an account ?</span></div>

            </div>
        )
    }
}
