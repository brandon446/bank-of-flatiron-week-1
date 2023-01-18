import React from "react";

function Search ({handleSearch}){
    return (
        <div>
         <input  className="input-group mb-3" type="text" onChange={handleSearch} placeholder="Search Your Transactions"/>

        </div>
        )
}
export default Search