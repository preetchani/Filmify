import React from 'react'
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL,POSTER_SIZE } from '../config';
import Spinner from './Spinner/spinner'
import Grid from './Grid/grid';
import NoImage from '../images/no_image.jpg'
import BreadCrumb from './BreadCrumb/breadcrum';
import MovieInfo from './MovieInfo/movieInfo';
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = ()=> {
    const {movieId} = useParams();
    const {state: movie,loading,error}=useMovieFetch(movieId);

    if (loading) return <Spinner/>
    if (error) return <div>Something went Wrong...</div>
   
    return(
        <>
           <BreadCrumb movieTitle={movie.original_title}/>
           <MovieInfo movie={movie}/>
        </>

)
};

export default Movie;