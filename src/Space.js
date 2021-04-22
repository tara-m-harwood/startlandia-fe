import React, { Component } from 'react'


export default class Space extends Component {

    render() {

        return (
            <div id={this.props.id} style={{display: "flex", flexDirection: "column" }}>
                <p>{this.props.spaceData.top}</p>
                <p>{this.props.spaceData.bottom}</p>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <h1>{this.props.player1}</h1>
                    <h1>{this.props.player2}</h1>
                </div>    
            </div>
        )
    }
}
