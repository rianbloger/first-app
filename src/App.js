import React, { Component } from 'react'
import axios from 'axios'
import { wait } from '@testing-library/react'

class App extends Component{

  constructor (){
    super()

    this.state = {
      user: []
    }
  }

  getUser = async() => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    this.setState({
      user : response.data
    })
  }

  componentDidMount(){
    this.getUser()
  }

  render(){
   const {user} = this.state
    return (
      <div>
        <div>My name is {user.name} </div>
        <div>My name is {user.username} </div>
      </div>
    
    )
  }
}

export default App