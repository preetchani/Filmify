import React from 'react'
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL,POSTER_SIZE } from '../config';
import Spinner from './Spinner/spinner'
import Grid from './Grid/grid';
import NoImage from '../images/no_image.jpg'
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = ()=> {
    const {movieId} = useParams();
    const {state: movie,loading,error}=useMovieFetch(movieId);
    console.log(movie);
return(
    <>
        <div>Movies</div>
    </>

)
};

export default Movie;