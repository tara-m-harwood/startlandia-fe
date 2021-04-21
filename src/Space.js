import React, { Component } from 'react'

export default class Space extends Component {
    render() {
        return (
            <div class="space">
                <h1>{this.props.id}</h1>
                <h6>does this work?</h6>
                <p>player1</p>
            </div>
        )
    }
}
