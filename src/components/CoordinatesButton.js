import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleClick = (event) => {
       let position = [event.clientX, event.clientY];
       this.props.onReceiveCoordinates(position)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

