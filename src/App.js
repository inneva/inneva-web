import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Case from './containers/Case'
import Main from './containers/main/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/case/:slug" component={() => <Case />} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App
