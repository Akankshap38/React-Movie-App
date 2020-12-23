import React,{useState, useEffect} from "react"
import Header from "./Header"
import SearchBox from "./SearchBox"
import MovieCard from "./MovieCards"
import { Row} from 'react-bootstrap';
function App(){

    const [movieList, updateMovieList] = useState([]);
    const [searchValue, setSearchValue ] = useState('');

    async function searchChanged(searchValue){
        console.log(searchValue+" sent from SearchBox components...");
        const response = await fetch('http://www.omdbapi.com/?s='+searchValue+'&apikey=5c3f7439');
        const responseJson = await response.json();
        console.log(responseJson);
        console.log(responseJson.Search);
        console.log(Array.isArray(responseJson.Search));

        if(responseJson.Search&&responseJson.Search.length>0)
            updateMovieList(responseJson.Search)
    }

    useEffect(()=>{
        console.log(searchValue);
        if(searchValue.length>=3)
            searchChanged(searchValue);
    },[searchValue]);

    return (<div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
            <Header />
            <SearchBox onSearchChange={setSearchValue}/>
            <Row>
                { movieList.map((element,index)=>{
                    return (<MovieCard imgLink={element.Poster} title={element.Title} key={index}/>)
                    })
                } 
            </Row>
        </div>
    </div>)

}

export default App;