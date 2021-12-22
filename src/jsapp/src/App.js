
import './App.css';
import { getAllStudents } from './clinet';
import React, { Component } from 'react';

class App extends Component {

  state = {
    students: []
  }
componentDidMount () {
  this.fetchStudents();
}
  fetchStudents = () => {

    getAllStudents()
    .then(response => response.json()
    .then(students => {
      console.log(students);
      this.setState({ students });
    }));
  }
  render() {
    return <h1> hello my name is slim shady</h1>
  }
}

export default App;
