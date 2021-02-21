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
      console.log(this.state.username, this.state.password)
   }

   render() {
      return (
         <div>
            <h1 className="header">Login</h1>
            <div>
               <form>
                  <label for="username">Username: </label>
                  <input
                     type="text"
                     name="username"
                     value={this.state.username}
                     onChange={this.handleChange}
                  />
                  <br></br>
                  <label for="password">Password: </label>
                  <input
                     type="text"
                     name="password"
                     value={this.state.password}
                     onChange={this.handleChange}
                  />
                  <br></br>
                  <input
                     type="submit"
                     value="Submit"
                     onClick={this.handleSubmit}
                  />
               </form>
            </div>
         </div>
      )
   }
}

export default LogIn
