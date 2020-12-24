import React from "react";

function MovieCard(props){
    const FavouriteComponent = props.FavComponent;
    return (<div className="image-container d-flex justify-content-start m-3">
        <img src={props.imgLink} alt={props.title}/>
        <div className="overlay d-flex align-items-center justify-content-center" onClick={()=>{
            props.onFavClick(props.title, props.imgLink);
        }} >
            <FavouriteComponent />
        </div>
        
    </div>)
}

export default MovieCard;