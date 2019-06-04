import React, { Component } from 'react';
import ManaBar from './ManaBar.js/ManaBar';

import './ManaPool.scss'


class ManaPool extends Component {
  

    state ={
        manaIsActive : [1,1,1,1,1,0,0,0,0,0],
        mana:5,
    }

    componentDidMount(){
        this.refillMana()
    }

    refillMana = () =>{
        const refill = setInterval(() => {
            const manaArr = [...this.state.manaIsActive];
            manaArr[this.state.mana] = 1;
            this.setState({
                manaIsActive: manaArr,
                mana:this.state.mana+1
            },()=>{
                if (this.state.mana>9){
                    this.setState({
                        mana:10
                    })
                    clearInterval(refill);
                }   
            });
            
        }, 1000);
    }
    

    render() {
        const renderMana = this.state.manaIsActive.map((status, index) =>{
            return (<ManaBar key={index} isActive={status} />)
        })
        return (
            <div className="mana-pool">
                {renderMana}
            </div>
        );
    }
}

export default ManaPool;