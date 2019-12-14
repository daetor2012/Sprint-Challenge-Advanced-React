import React from 'react';
import DisplayData from './display';
import Navbar from "./Navbar";
import "./App.css"

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      data: []
    }
  }

  
  componentDidMount() {

    fetch('http://localhost:5000/api/players')
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({ data: response })
      
    })
    .catch(error => console.log(error))
  }

  
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Welcome to my app!</h1>
        <DisplayData data={this.state.data} />
      </div>
    )
  }
}

export default App;
