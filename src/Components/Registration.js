import React, { Component } from 'react'; 

class Registration extends Component {
   state = {
      username: "",
      password: "",
      name: ""
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault();

      fetch('https://divercity-test.herokuapp.com/register', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         },
         body: JSON.stringify({
            "username": this.state.username,
            "password": this.state.password, 
            "name": this.state.name
         })
      })
         .then(console.log(this.state.username, this.state.password, this.state.name))
   }

   render() {
      return (
         <div>
            <div className="card">
               <h1 className="header">Register For An Account</h1>
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
                     <label>Name: </label>
                     <input
                        type="text"
                        name="name"
                        className="form-input"
                        value={this.state.name}
                        onChange={this.handleChange}
                     />
                     <br></br>
                     <br></br>
                     <button className="button" onClick={this.handleSubmit}>Login </button>
                  </form>
               </div>
            </div>
            <a className="link" href="/login">Already have an account? Login here. </a>
         </div>
      )
   }
}

export default Registration
