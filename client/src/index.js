import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreateEvent from './components/CreateEvent';
import CreateNotice from './components/Create_Notice';
import Event from './components/Table';
import Notice from './components/Table1';
import Register from './components/Register';
import Query1 from './components/Query1';
import Dash from './App';
import Login from './components/Login';
import CollegeAdmin from './components/TableCollegeAdmin'
import CollegeList from './components/collegeList';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const routing = (
    <Router>
      <Switch>
        <Route path="/createEvent" component={CreateEvent} />
        <Route path="/createNotice" component={CreateNotice} />
        <Route path="/Notice" component={Notice} />
        <Route path="/Event" component={Event} />
        <Route path="/Dash" component={Dash} />
        <Route path="/loginhome" component={CollegeList} />
        <Route path="/register" component={Register} />
        <Route path="/Search" component = {Query1} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
  ReactDOM.render(routing, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
