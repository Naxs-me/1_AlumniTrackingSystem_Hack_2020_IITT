import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreateEvent from './components/CreateEvent';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';

const routing = (
    <Router>
      <Switch>
        <Route path="/createEvent" component={CreateEvent} />
      </Switch>
    </Router>
  );
  ReactDOM.render(routing, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
