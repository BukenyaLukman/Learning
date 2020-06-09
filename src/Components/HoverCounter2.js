import React, { Component } from 'react'

class HoverCounter2 extends Component {

    render() {
        const { count } = this.state
        return (
            <h2 onMouseOver={this.incrementCount}>Hovered {count} Times</h2>
        )
    }
}

export default HoverCounter2
