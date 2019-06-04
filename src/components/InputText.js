import React, { Component } from 'react'

export default class InputText extends Component {

    state = {
        value: '',
        onFocus: false,
    }

    handleOnChange = (event) => {
        this.setState({
            value: event.target.value
        })
        this.props.changeField(event.target.name, event.target.value)
    }

    handleOnFocus = () => {
        this.setState({ onFocus: true })
    }

    handleOnBlur = () => {
        this.setState({ onFocus: false })
    }


    render() {
        return (
            <span className="input input--nao">
                <input className={`input__field input__field--nao ${this.state.onFocus || this.state.value.length > 0 ? "input__field--nao--onText" : ''}`}
                   
                    name={this.props.name}
                    value={this.state.value}
                    onChange={this.handleOnChange}
                    onFocus={this.handleOnFocus}
                    onBlur={this.handleOnBlur} 
                    type={this.props.type}
                    autoComplete={this.props.type==="password"? "current-password": ""}
                    />
                <label className="input__label input__label--nao" htmlFor="input-1">
                    <span className="input__label-content input__label-content--nao">{this.props.label}</span>
                </label>
                <svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
                </svg>
            </span>
        )
    }
}
