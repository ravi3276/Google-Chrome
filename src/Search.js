import React,{useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
function Search() {

    const[input,setInput]=useState("")
    
    const searchongoogle=(e)=>{
        e.preventDefault();
        
        console.log(input);
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

            <div className="search__btn">
            <Button type="submit" onClick={searchongoogle}>Google Search</Button>
            <Button variant="outlined">i'm Feeling Lucky</Button>
            </div>
        </form>
            
    )
}

export default Search
