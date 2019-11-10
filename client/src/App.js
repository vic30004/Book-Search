import React, { Component } from 'react';
import './App.css'
import Nav from './component/Nav/Nav';
import Header from './component/Header/Header'

export class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Header/>
      </div>
    )
  }
}

export default App

