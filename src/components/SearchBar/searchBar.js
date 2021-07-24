import React,{useEffect,useState,useRef} from 'react';
import {Wrapper,Content} from './SearchBar.styles';
import searchIcon from '../../images/search-icon.svg';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const initial =useRef(true);

    useEffect(()=>{

        //skip initial re-randor using useRef
        if(initial.current){
            initial.current=false;
            return;
        } 
        //create delay in search for better UX
        const timer = setTimeout(()=>{
            setSearchTerm(state);
        },500)
         //clear timer before every search
         return ()=>clearTimeout(timer)
    },[setSearchTerm,state])


    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input type="text" placeholder="Search Movie" onChange={e=>setState(e.currentTarget.value)} value={state}/>
            </Content>
        </Wrapper>
    );
}

export default SearchBar;
