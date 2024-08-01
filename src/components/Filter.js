import React from 'react'; 
function Filter({ onCategoryChange }) {
 return (
 <div>
<label htmlFor="category">Filter by category:</label>
 <select id="category" onChange={onCategoryChange}> 
<option value="All">All</option> 
<option value="Dairy">Dairy</option> 
<option value="Bakery">Bakery</option>
 </select>
  </div> 
  );
   }
    export default Filter;
