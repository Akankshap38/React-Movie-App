import React from "react";

function SearchBox(props){

    return (    
    <input className="form-inline" type="search" onChange={(event)=>{
            props.onSearchChange(event.target.value);
        }} placeholder='Type to search...'/>
  )
}

export default SearchBox;