import React, { Component } from 'react';
import './App.css';
import { getAllStudents } from './client';

class App extends Component {

//   state = {
//     students: []
//   }
// componentDidMount () {
//   this.fetchStudents();
// }
  // fetchStudents = () => {
  //   getAllStudents()
  //   .then(response => response.json()
  //   .then(students => {
  //     console.log(students);
      // this.setState({ students });
    // }));
  // }
  render() {
    var stringified = JSON.stringify(data);
var parsedObj = JSON.parse(stringified);
    getAllStudents()
    .then(response => response.json()
    .then(students => {
      console.log(students);
      // this.setState({ students });
    }));
    return <h1> hello my name is slim shady</h1>
  }
}

export default App;
