import React from 'react';

export default function Input() {
    return ( 
      <form >
        <label htmlFor = "search-bar">Event:</label> 
        <input type = "text" id = "search-bar" onChange = { e => prop.searchString(e.target.value) }/> 
      </form>
    )
}