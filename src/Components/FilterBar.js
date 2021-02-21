import React from 'react'; 

function FilterBar() {
   return (
      <div className="filter-bar">
         <div className="filter-option">Filter By: </div>
         <div className="filter-option">
            <label for="location">Location  </label>
            <select name="location" id="location">
               <option value="San Francisco">San Francisco</option>
               <option value="New York">New York</option>
               <option value="Miami">Miami</option>
               <option value="Remote">Remote</option>
            </select>
         </div>
         <div className="filter-option">
            <label for="job-type">Job Type  </label>
            <select name="job-type" id="job-type">
               <option value="Full Time">Full Time</option>
               <option value="Part Time">Part Time</option>
               <option value="Remote">Remote</option>
               <option value="Internship">Internship</option>
            </select>
         </div>
         <div className="filter-option">
            <label for="skills">Skills  </label>
            <input name="skills" id="skills" type="text" placeholder="Begin Typing..."></input>
         </div>
      </div>
   )
}

export default FilterBar