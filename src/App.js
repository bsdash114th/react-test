import React from 'react';
import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        count: 0
      }
    }
    increment =() => {
      this.setState({count: this.state.count + 1});
    }
    decrement =() => {
      this.setState({count: this.state.count - 1});
    }
  render(){
  return (
      <div className="App">
        <h2> COUNT </h2>
        <button onClick={this.increment} className="counter" >+</button>
        <button onClick={this.decrement} className="counter" >-</button>
        <h2> {this.state.count} </h2>

     
      </div>
    );
  
  }

};

export default App;
