import React from 'react'; 
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
        <h1>Divercity Frontend Challenge</h1>
      </div>
    );
  }
}

export default App;
