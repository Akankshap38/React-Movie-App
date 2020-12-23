import React from "react";

function MovieCard(props){
    return (<div className="image-container d-flex justify-content-start m-3">
        <img src={props.imgLink} alt={props.title}/>
    </div>)
}

export default MovieCard