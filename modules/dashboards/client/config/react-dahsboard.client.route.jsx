import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { Timeline, RequestLoan } from '../routes/index.jsx'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/request' component={RequestLoan} />
        <Route path='/timeline' component={Timeline} />
      </Router>
    )
  }
}

export default App
