import React, { Component } from 'react';

function SearchBar(props) {    
    return (
        <div>
            <input 
            onChange={props.handleInput} 
            type="text" 
            value={props.searchInput}
            />
        </div>
    )
}

export default SearchBar