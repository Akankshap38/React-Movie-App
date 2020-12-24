import React from "react";

function SearchBox(props){

    return (<div className='col col-sm-4'>
        <input className="form-control" type="text" onChange={(event)=>{
            props.onSearchChange(event.target.value);
        }} placeholder='Type to search...' />
    </div>)
}

export default SearchBox;