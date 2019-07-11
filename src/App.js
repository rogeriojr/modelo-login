import React from 'react';
import Login from './Login'
import api from './api'

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
      <Login />
    );
    
  }
}