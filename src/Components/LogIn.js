import React, { Component } from 'react';

class LogIn extends Component {
   state = {
      username:"",
      password: ""
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault(); 

      // if (!event.target.username.value) {
      //    alert("Username is required.")
      // } else if (!event.target.password.value) {
      //    alert("Please enter your password.")
      // }
      
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
      .then(alert("Successfully logged in!"))
   }

   render() {
      return (
         <div>
            <div className="card">
               <h1 className="header">Login</h1>
               <div className="column">
                  <form onSubmit={this.handleSubmit}>
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
                     <button className="button">Login </button>
                  </form>
               </div>
            </div>
            <a className="link" href="/register">Don't have an account? Register here. </a>
         </div>
      )
   }
}

export default LogIn
