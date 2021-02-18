import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import JobList from
  './Components/JobList';
import './App.css';

class App extends React.Component {
  state = {
    jobs: []
  }

  componentDidMount = () => {
    fetch('https://divercity-test.herokuapp.com/jobs')
      .then(resp => resp.json())
      .then(data => this.setState({
        jobs: data
      }))
    .then(() => console.log(this.state.jobs))
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/jobs'
            render={routerProps =>
              <JobList {...routerProps}
              jobs={this.state.jobs}
              />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
