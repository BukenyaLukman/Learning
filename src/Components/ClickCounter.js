import React, { Component } from 'react'

import Updatedcomponent from './WithCounter'

class ClickCounter extends Component {
    
    render() {
        const { count, incrementCount} = this.props
        return (
            <div>
               <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        ) 
    }
}

export default Updatedcomponent(ClickCounter)
