import { Component, useEffect, useState } from "react";

class LifeCycle extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ""
    }
  }

  // useEffect(() => {}, [])
  componentDidMount() {
    console.log('this is the useEffect(() => {}, [])');
    this.setState({
      searchTerm: "Something cool!"
    })
  }

  // useEffect(() => {}, [counter])
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    if(prevState.searchTerm.length > 40) {
      this.setState({searchTerm: ""})
    }
  }

  // useEffect(() => { return {}})
  componentWillUnmount() {
    console.log('This useEffect is to move something during the unmount stage');
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <input 
          type="text"  
          value={this.state.searchTerm} 
          onChange={(e) => this.setState({searchTerm: e.target.value}) }   
        />
        <h1>Search Term: {this.state.searchTerm}</h1>
        {/* <Name /> */}
      </div>
    )
  }
}

export default LifeCycle


const Name = () => {
  const [counter, setCounter ] = useState(0)
  const [something, setSomething ] = useState("")
  console.log('In the function');


  useEffect(() => {
    console.log('In the useEffect');
    document.addEventListener('keyup', () => {

    })
    return {
      
    }
  })

  useEffect(() => {
    console.log('Inside the useEffect 2');
    setCounter(counter + 1)
  },[])



  useEffect(() => {
    console.log('Inside the useEffect 3');
    setSomething("Something")
  }, [counter])


  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  )
};
