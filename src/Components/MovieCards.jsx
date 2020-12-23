import React from "react";
import { Col } from 'react-bootstrap';
function MovieCard(props){
    return (<Col className="image-container d-flex justify-content-start">
        <img src={props.imgLink} alt={props.title}/>
    </Col>)
}

export default MovieCard