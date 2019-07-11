import React from 'react';
import logo from './logo.svg';
import './App.css';
import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'http://api.plantaoextra.com/v1',
  headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjI4NTkyNTMsIm5iZiI6MTU2Mjg1OTI1MywianRpIjoiMjkzOWZjNGYtYWI1Yy00NzkyLWExMGEtYTBhNmJhNTM1ZTQ3IiwiZXhwIjoxNTYyODYyODUzLCJpZGVudGl0eSI6eyJ1c2VyX2lkIjo0LCJuYW1lIjoiUmFmYWVsIEFMbWVpZGEgb2ZpY2lhbCIsImNvbXBhbnlfaWQiOjEsImdyb3VwX2lkIjozLCJ1c2VyX2xvZ2dlZF9pZCI6MzIzfSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.9Fk7Q9LIymXaN17OCFsHMZDgEV4BG6cn9tavDViIgnw'
  },
  timeout: 30000
})

export default class App extends React.Component{

  state = {
    units: []
  }

  componentDidMount() {
    api.get('/units')
    .then(response => {
        const units = response.data
        this.setState(
          { 
            units: units
          }
        )
    })
  }

  render() {

    var { msg, data } = this.state.units

    if(data == undefined){
      data = []
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.<br />
            { msg }
          </p>
          <ul>
            { data.map(person => <li>{person.name}</li>) }
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    
  }
}
