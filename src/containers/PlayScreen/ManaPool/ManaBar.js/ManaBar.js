import React, { Component } from 'react';
import './ManaBar.scss'
class ManaBar extends Component {
    render() {
        console.log(this.props.isActive)
        return (
            <div className={`mana-bar ${this.props.isActive ? 'active' : ''}`}>
                
            </div>
        );
    }
}

export default ManaBar;