import React from "react";
import { Col } from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';

function MovieCard(props){
    return (<Col className="image-container d-flex justify-content-start">
        <img src={props.imgLink} alt={props.title}/>
        <div className="overlay" onClick={()=>{
            props.onFavClick(props.title);
        }} >
         Add to your Favourite
        <span>
            <FavoriteIcon style={{ color: "red" }}></FavoriteIcon>
        </span>
        </div>
    </Col>)
}

export default MovieCard;