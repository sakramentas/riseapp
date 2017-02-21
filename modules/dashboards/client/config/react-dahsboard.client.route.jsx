import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { Timeline, RequestLoan, AcceptLoan } from '../routes/index.jsx'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/request' component={RequestLoan} />
        <Route path='dashboards/timeline' component={Timeline} />
        <Route path='/accept' component={AcceptLoan} />
      </Router>
    )
  }
}

export default App
