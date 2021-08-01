import React from 'react'
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL,POSTER_SIZE } from '../config';
import Spinner from './Spinner/spinner'
import Grid from './Grid/grid';
import NoImage from '../images/no_image.jpg'
import BreadCrumb from './BreadCrumb/breadcrum';
import MovieInfo from './MovieInfo/movieInfo';
import MovieInfoBar from './MovieInfoBar/movieInfoBar';
import Actor from './Actor/actor';
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
           <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
           <Grid header='Actors'>
               {movie.actors.map(a=>(
                   <Actor
                   key={a.credit_id}
                   name={a.name}
                   character={a.character}
                   imageUrl={
                       a.profile_path?`${IMAGE_BASE_URL}${POSTER_SIZE}${a.profile_path}`:NoImage
                   }
                   />
               ))}
           </Grid>
        </>

)
};

export default Movie;