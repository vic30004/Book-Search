import React, { Component } from 'react';
import './App.css'
import Nav from './component/Nav/Nav';
import Header from './component/Header/Header';
import Books from './component/books/Books'
import GBooksState from './component/context/GoogleBooks/GBooksState'

export class App extends Component {
  render() {
    return (
      <GBooksState>
        <Nav/>
        <Header/>
        <Books/>
      </GBooksState>
    )
  }
}

export default App

