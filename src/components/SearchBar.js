import { TextField } from '@material-ui/core'
import React from 'react'
import '../css/search.css'
import SearchIcon from '@material-ui/icons/Search'

function SearchBar() {
    return (
        <div className="search">
            <div style={{position: 'relative', display: 'inline-block'}}>
                <SearchIcon style={{position: 'absolute', right: 0, top: 15, width: 20, height: 20}}/>
                <TextField variant="outlined" placeholder="Search here.."/>
            </div>        
        
        </div>
    )
}

export default SearchBar
