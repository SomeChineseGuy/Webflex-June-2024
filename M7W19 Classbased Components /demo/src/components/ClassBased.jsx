import React, {Component, useState} from 'react';

class Classbased extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {  
      counter: 0,
      name: 'alvin',
      arr: [1,3,4,5]
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Life Cycle Component</h1>
        <h2>{this.props.name}</h2>
        <p>The counter is {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Classbased;

const LifeCycle2 = (props) => {
  console.log(props);
  const [counter, setcounter ] = useState(0);
  const [name, setname ] = useState()
  const increment = () => {
    counter += 1
  }

  console.log('fire');
  return (
    <div>
      
    </div>
  )
};
