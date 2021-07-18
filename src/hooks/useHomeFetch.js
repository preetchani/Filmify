import { useState,useEffect } from "react";
import API from '../API';

const initialState={
    page:0,
    results:[],
    total_pages:0,
    total_results:0
};

export const useHomeFetch = ()=>{
    const [state,setState]=useState(initialState);
    const [loading,setLoding]= useState(false);
    const [error,setError]= useState(false);

    const fetchMovies = async (page, searchTerm="")=>{
        try{
            setError(false);
            setLoding(true);
            const movies = await API.fetchMovies(searchTerm,page);
            console.log(movies);

            //use extra () to return only object and pass it to setState 
            setState(prev=>({
                // use spread operator to get all the properties of movies object
                ...movies,
                //if there are new movies to fetech append movies results to prev results
                results: page>1 ? [...prev.results,...movies.results]: [...movies.results]

            }));
        }catch(error){
            setError(true);
        }
        setLoding(false);
    };

    useEffect(()=>{
        fetchMovies(1);
    }, []);

    return {state,loading,error};
}