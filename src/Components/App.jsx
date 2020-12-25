import React,{useState, useEffect} from "react"
import Header from "./Header"
import SearchBox from "./SearchBox"
import MovieCard from "./MovieCards"
import AddFavComponent from "./AddFavComponent";
import RemoveFavComponent from "./RemoveFavourite";
// eslint-disable-next-line
function App(){

    const [movieList, updateMovieList] = useState([]);
    const [searchValue, setSearchValue ] = useState('');
    const [favList, updateFavList] = useState([]);

    async function searchChanged(searchValue){
        const response = await fetch('http://www.omdbapi.com/?s='+searchValue+'&apikey=5c3f7439');
        const responseJson = await response.json();
        if(responseJson.Search&&responseJson.Search.length>0)
            updateMovieList(responseJson.Search)
    }

    useEffect(()=>{
        if(searchValue.length>=3)
            searchChanged(searchValue);
    },[searchValue]);

    useEffect(()=>{
        console.log('Favourite movie List changed...')
        console.log(favList);
        
    },[favList]);

    useEffect(()=>{
        const favLocalMovie = JSON.parse(localStorage.getItem('FavouriteMovieList')|| "[]"); 
        console.log('In local storage...');
        console.log(favLocalMovie);
        if(favLocalMovie.length>0)
           { updateFavList(favLocalMovie);      
             console.log(favList); 
           }
    },[]);

    function addFavouriteToList(title,Poster){
        var flag = favList.find(element=>{
            return element.Title===title;
        })
        if(typeof flag==='undefined'){
            var newList = [...favList,{
                Title:title,
                Poster:Poster
            }]
            console.log(newList);
            updateFavList(newList);
            localStorage.setItem('FavouriteMovieList',JSON.stringify(newList));
        }      
    }

    function removeFavouriteFromList(title,poster){
        const newList = favList.filter((element)=>{
            return element.Title!==title})
        updateFavList(newList);
        localStorage.setItem('FavouriteMovieList',JSON.stringify(newList));
    }

    return (<div className='container-fluid movie-app'>
        <div className='row'>
            <Header content="Movies"/>
            <SearchBox onSearchChange={setSearchValue}/>
        </div>
        <div className="row">
            { movieList.map((element,index)=>{
                    return (<MovieCard imgLink={element.Poster} 
                                       title={element.Title} 
                                       key={index} 
                                       onFavClick={addFavouriteToList} 
                                       FavComponent = {AddFavComponent}
                            />)
                    })
            } 
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
			<Header content='Favourites' />
		</div>
        <div className="row">
                { favList.map((element,index)=>{
                    return (<MovieCard imgLink={element.Poster} 
                        title={element.Title} 
                        key={index} 
                        onFavClick={removeFavouriteFromList} 
                        FavComponent = {RemoveFavComponent}
             />)
                })
                
                }
        </div>
        
    </div>)
}


export default App;