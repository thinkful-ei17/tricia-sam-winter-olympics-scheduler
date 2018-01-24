import React from 'react';

export default function Input(props) {
    return ( 
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor = "search-bar">Event:</label> 
        <input className="search-bar" type = "text" id = "search-bar" onChange={e => props.searchString(e.target.value)} /> 
      </form>
    )
}