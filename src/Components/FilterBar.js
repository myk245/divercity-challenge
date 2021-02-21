import React from 'react'; 

function FilterBar() {
   return (
      <div className="filter-bar">
         <div>Filter Results</div>
         <div className="filter-option">
            <input type="text" placeholder="Search for names.."></input>
         </div>
      </div>
   )
}

export default FilterBar