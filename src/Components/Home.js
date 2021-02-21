import React from 'react'; 

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1 className="header">Welcome to Divercity</h1>
            <div className="flex-wrapper">
               <div className="row">
                  <div className="image-container">
                     <img className="image" alt="Divercity Home" src="Divercity-Home.png"></img>
                  </div>
                  <div className="text-container">
                     <p className="home-text">Connecting underrepresented
                     professionals with diverse-minded companies</p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Home