import React from "react";

function Header(props){
    return (<div className='col'>
        <h1>{props.content}</h1>
    </div>)
}

export default Header;