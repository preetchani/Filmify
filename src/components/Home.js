import React from 'react';
import { useHomeFetch } from '../hooks/useHomeFetch';
import { POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL } from '../config';
import NotFound from '../images/no_image.jpg';
import MainSection from './MainSection/mainSection';
import Grid from './Grid/grid';
import Thumb from './Thumbnails/thumb';
import Spinner from './Spinner/spinner';
import SearchBar from './SearchBar/searchBar';
const Home=()=>{
   const {state,loading,error,searchTerm,setSearchTerm} = useHomeFetch();
    //console.log(`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`);
    return (
        <>
        
        { !searchTerm && state.results[0] ?
            <MainSection 
            image={IMAGE_BASE_URL+BACKDROP_SIZE+state.results[0].backdrop_path}
            title={state.results[0].original_title}
            text={state.results[0].overview}
            />
            :null
        }
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map(movies=>(
            <Thumb
             key={movies.id}
             clickable 
             image={movies.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movies.poster_path : NotFound} 
             movieId={movies.id}/>
        ))}
        </Grid>
        <Spinner/>
        </>
    )
}

export default Home;
