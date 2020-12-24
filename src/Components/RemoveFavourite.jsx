import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';

function RemoveFavComponent(){
    return (<div>
        <span className='mr-2'>Remove Favourites</span>
        <FavoriteIcon style={{ color: "red" }}></FavoriteIcon>
        </div>
    )
}

export default RemoveFavComponent;