import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';

function AddFavComponent(){
    return (<div>
        <span className='mr-2'>Add to Favourites</span>
        <FavoriteIcon style={{ color: "red" }}></FavoriteIcon>
        </div>
    )
}

export default AddFavComponent;