import React, { Component } from 'react'



export default class Space extends Component {

    render() {


        return (
            <div id={this.props.id} style={{display: "flex", flexDirection: "column" }}>
                <p>{this.props.spaceData.top}</p>
                <p>{this.props.spaceData.bottom}</p>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <p>{this.props.spaceData.leftLower}</p>
                    <p>{this.props.spaceData.rightLower}</p>
                </div>    
            </div>
        )
    }
}
