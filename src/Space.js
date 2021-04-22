import React, { Component } from 'react'


export default class Space extends Component {

    render() {

        return (
            <div id={this.props.id} className="board-space">
                <p className="top-text">{this.props.spaceData.top}</p>
                <p className="bottom-text">{this.props.spaceData.bottom}</p>
                <div className="player-area">
                    <h1 className="player">{this.props.player1}</h1>
                    <h1 className="player">{this.props.player2}</h1>
                </div>    
            </div>
        )
    }
}
