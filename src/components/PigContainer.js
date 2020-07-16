import React, { Component } from 'react';
import Pig from "./Pig";

export default class PigContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="ui grid container">
                {this.props.pigs.map((pig, index) => {
                    return <Pig key={index} pigInfo={pig} />
                })}
            </div>
        )
    }
}