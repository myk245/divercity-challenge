import React from 'react'; 

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1 className="header">Welcome to Divercity</h1>
               <div className="flex-container">
                  <div className="image-container">
                     <img className="image" alt="Divercity Home" src="Divercity-Home.png"></img>
                  </div>
                  <div className="text-container">
                     <div className="column">
                        <p className="column-item home-text">Connecting underrepresented
                        professionals with diverse-minded companies</p>
                        <div className="column-item secondary-text">
                           <p className="text">Are you an underrepresented professional in search of your next opportunity? We’ve got you covered. Make new connections and get instant access to jobs with companies that value diversity.</p>
                           <br></br>
                           <a href="/jobs" className="button">Browse Jobs at Divercity</a>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
      )
   }
}

export default Home