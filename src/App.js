// STYLE:
import './App.css';

// COMPONENT:
import SideBar from './components/SideBar';
import Home from './components/Home';
import Capsules from './components/Capsules';
import Notfound from './components/Notfound';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <SideBar />
          <Switch>
            <Route path='/' exact render={() => (<Home />)} />
            <Route path='/capsules' render={() => (<Capsules />)} />
            <Route render={() => (<Notfound />)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
