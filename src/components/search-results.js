import React from 'react';
import Event from './event';

export default function Results(props){

    return(
        <div>
            Testing
            <Event events={props.events} />
        </div>
    )
}