import React from 'react';
import Event from './event';

export default function Results(props){

    return(
        <div className="event">
            <Event events={props.events} />
        </div>
    )
}