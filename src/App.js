import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import NavBar from './Components/NavBar';
import JobList from
  './Components/JobList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/jobs'
            render={routerProps =>
              <JobList
                // {...routerProps}
              // jobs={this.state.jobs}
              />}
          />
          <Route path="/login" component={LogIn} />
          <Route path="/register" />
        </Switch>
      </div>
    );
  }
}

export default App;
