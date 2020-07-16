import React, { Component } from 'react';

export default class Pig extends Component {

  state = {
    infoShown: false,
    hidden: false
  }

  handleInfoClick = () => {
    this.setState({
      infoShown: !this.state.infoShown
    })
  }

  handleHideClick = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }
  
    render() {
        const pigName = this.props.pigInfo.name.replace(/ /g,"_").toLowerCase()
        const pigImage = require(`../hog-imgs/${pigName}.jpg`)
        return (
            <div className={this.state.hidden ? "hidden" : ""}>
                <h2>{this.props.pigInfo.name}</h2>
                <img src={pigImage}></img>
                <div className={this.state.infoShown ? "" : "hidden"}>
                  <h4>{this.props.pigInfo.greased ? "greased" : "not greased"}</h4>
                  <h4>{`Weight: ${this.props.pigInfo.weight}`}</h4>
                  <h4>{`Specialty: ${this.props.pigInfo.specialty}`}</h4>
                  <h4>{`Highest Medal Acheived: ${this.props.pigInfo["highest medal achieved"]}`}</h4>
                </div>

                <h4>{this.props.pigInfo.greased ? "greased" : "not greased"}</h4>

                <button onClick={this.handleInfoClick}>Show Info</button>
                <button onClick={this.handleHideClick}>Hide Card</button>

            </div>
        )
    }
}