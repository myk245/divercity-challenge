import React, { Component } from 'react';

class LogIn extends Component {
   state = {
      username: "", 
      password: ""
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault(); 
      
      fetch('https://divercity-test.herokuapp.com/login', {
         method: 'POST', 
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         },
         body: JSON.stringify({
            "username": this.state.username,
            "password": this.state.password
         })
      })
         .then(console.log(this.state.username, this.state.password))
   }

   render() {
      return (
         <div className="card">
            <h1 className="header">Login</h1>
            <div className="column">
               <form>
                  <label>Username: </label>
                  <input
                     type="text"
                     name="username"
                     className="form-input"
                     value={this.state.username}
                     onChange={this.handleChange}
                  />
                  <label>Password: </label>
                  <input
                     type="text"
                     name="password"
                     className="form-input"
                     value={this.state.password}
                     onChange={this.handleChange}
                  />
                  <br></br>
                  <br></br>
                  <button className="button" onClick={this.handleSubmit}>Login </button>
               </form>
            </div>
         </div>
      )
   }
}

export default LogIn
