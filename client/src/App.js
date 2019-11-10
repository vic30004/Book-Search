import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav/Nav';
import Header from './component/Header/Header';
import Books from './component/books/Books';
import SavedBooks from './component/saved/SavedBooks';
import SBooksState from './component/context/SavedBooks/SBooksState';
import GBooksState from './component/context/GoogleBooks/GBooksState';

export class App extends Component {
  render() {
    return (
      <Router>
      <SBooksState>
        <GBooksState>
        
          <Nav />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Header />
                  <Books />
                </Fragment>
              )}
            />
          </Switch>
        </GBooksState>
        
          <Switch>
            <Route
              exact
              path='/saved-books'
              render={props => (
                <Fragment>
                  <SavedBooks />
                </Fragment>
              )}
            />
          </Switch>
        </SBooksState>
      </Router>
    );
  }
}

export default App;
