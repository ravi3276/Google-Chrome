import React from 'react'
import './SearchPage.css';
import {useStateValue} from "./StateProvider"
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import Search from './Search';
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function SearchPage() {
      const [{term}]=useStateValue();
      const {data}=useGoogleSearch(term);
            // const data=Response;
//     console.log(data.items);
    return (
        <div className="searchpage">
            <div className="searchpage__header">
            <Link  to="/">
            <img className="searchpage__logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="" />
            </Link>

                  <div className="searchpage__headerbody">
                  <Search hideButtons/>

                  <div className="searchpage__options">
                  <div className="searchpage__optionsleft">
                        <div className="searchpage__option">
                        <SearchIcon />
                        <Link to="/all">All</Link>
                        </div>

                        <div className="searchpage__option">
                        <DescriptionIcon />
                        <Link to="/news">News</Link>
                        </div>

                        <div className="searchpage__option">
                        <PermMediaIcon />
                        <Link to="/images">Images</Link>
                        </div>

                        <div className="searchpage__option">
                        <LocalOfferIcon />
                        <Link to="/shopping">Shopping</Link>
                        </div>

                        <div className="searchpage__option">
                        <RoomIcon />
                        <Link to="/maps">Maps</Link>
                        </div>

                        <div className="searchpage__option">
                        <MoreVertIcon />
                        <Link to="/more">More</Link>
                        </div>
                  </div>
                  <div className="searchpage__optionsright">
                  <div className="searchpage__option">
                  <Link to="/setting">Settings</Link>
                  </div>

                  <div className="searchpage__option">
                  <Link to="/tools">Tools</Link>
                  </div>
                  </div>
                  </div>
                  </div>
            </div>

            {
                  term?(
                        <div className="searchpage__results">
                              <p className="searchresultscount">
                              About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                              </p>

                              {
                                    data?.items.map(item=>(
                                          <div className="results">
                                          <a href={item.link}>

                                          {item.displayLink} ⬇ 
                                          </a>

                                          <a className="results__title"
                                          href={item.link}
                                          >
                                          <h2>
                                          {item.title}
                                          </h2>
                                          </a>

                                          <p className="snippet">{item.snippet}</p>
                                          </div>
                                    ))
                              }
                        </div>
                  ):(
                      <p></p>  
                  )
            }
          
            </div>
    )
}

export default SearchPage
