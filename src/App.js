import React, { Component } from 'react'
import Navbar from './componts/Navbar'
import News from './componts/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
