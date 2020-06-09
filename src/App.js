import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import ClickCounter2 from './Components/ClickCounter2';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter 
        render={ (count, incrementCounter) => <ClickCounter2 count={count} incrementCounter={incrementCounter}/>}/>
      </div>
    )
  }
}

export default App;
