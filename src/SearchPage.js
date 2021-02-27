import React from 'react'
import './Search.css';
import {useStateValue} from "./StateProvider"

function SearchPage() {
      const [{term}]=useStateValue();

    return (
        <div className="searchpage">
            <h1>this is my search page ....{term}</h1>
        </div>
    )
}

export default SearchPage
