import React, { Component } from 'react'
import "./Troop.scss"
export default class Troop extends Component {
  render() {
    const {troop} = this.props
    return (
      <div className="troop">
        <img src= {require(`../../../../assets/img/${troop.Name.toLowerCase()}.png`)} alt="troop"></img>
        <div className= "troop-info">
          {troop.Name} - {troop.ATK} DMG
        </div>
      </div>
    )
  }
}
