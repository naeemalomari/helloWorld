import React, { Component } from 'react';
import './App.css';
import { getAllStudents } from './client';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

  app.use(
    '/students', //this is your api
    createProxyMiddleware({
      target: 'http://localhost:8080/students', //this is your whole endpoint link
      changeOrigin: true,
    })
  );
}
class App extends Component {

  state = {
    students: []
  }
  componentDidMount() {
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
    getAllStudents()
      .then(response => response.json()
        .then(students => {
          console.log(students);
          this.setState({ students });
        }));
    return <h1> hello my name is slim shady</h1>
  }
}

export default App;
