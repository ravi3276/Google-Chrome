import React,{useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import {useHistory } from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Search({hideButtons}) {
    const [state,dispatch]=useStateValue();
    const[input,setInput]=useState("")
    const history = useHistory();

    const searchongoogle=(e)=>{
        e.preventDefault();
        // we need to do something by input
        console.log(input);
        history.push('/search');

        dispatch({
            type:"SET_SEARCH_TERM",
            term:input
        })

        setInput("");
    }

    return (
        <form className="search">
            <div className="search__container">
            <SearchIcon className="search__searchicon"/>
            <input
            value={input}
            onChange={e=>setInput(e.target.value)}
             type="text"
              placeholder="Search Google or type URL"/>
            <MicIcon className="search__mic"/>
            </div>
        {
            !hideButtons ? (
                <div className="search__btn">
                <Button type="submit" onClick={searchongoogle}>Google Search</Button>
                <Button variant="outlined">i'm Feeling Lucky</Button>
                </div>
            ):(
                <div className="search__btn">
                <Button className="search__btnHide" type="submit" onClick={searchongoogle}>Google Search</Button>
                <Button className="search__btnHide" variant="outlined">i'm Feeling Lucky</Button>
                </div>
            )
        }
           
        </form>
            
    )
}

export default Search
