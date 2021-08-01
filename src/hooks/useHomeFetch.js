import { useState,useEffect } from "react";
import API from '../API';
import { isPersistedState } from "../helpers";

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
    const [searchTerm,setSearchTerm]=useState('');
    const [isLoadingMore,setIsLoadingMore] = useState(false);

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

    //search movies
    useEffect(()=>{
        //check first in session storage
        if(!searchTerm){
            const sessionState = isPersistedState('homeState');
            if(sessionState){
                console.log("Fetching from Session storage")
                setState(sessionState);
                return;
            }
        }
        console.log("fetching from API");
        setState(initialState);
        fetchMovies(1,searchTerm);
    }, [searchTerm]);

    //load more
    useEffect(()=>{
        //run this useEffect only when we are loading something
        if(!isLoadingMore) return;
        fetchMovies(state.page+1,searchTerm)
        setIsLoadingMore(false);
    },[isLoadingMore,searchTerm,state.page]);

    //Write to session storage
    useEffect(()=>{
        if(!searchTerm) sessionStorage.setItem('homeState',JSON.stringify(state))
    },[searchTerm,state])

    return {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore};
}