import React from 'react'
import {Link} from "react-router-dom"
import './HomePage.css';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Search from './Search';

function HomePage() {
    return (
        <div className="homepage">
        <div className="homepage__header">
        
        <div className="homepage__left">
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        </div>

        <div className="homepage__right">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <IconButton>
        <AppsIcon />
        </IconButton>
            <Avatar />
        </div>
        </div>

        <div className="homepage__body">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
        alt="google"
        />

        <div className="homepage__search">
        <Search />
        </div>
        </div>
        </div>
    )
}

export default HomePage
