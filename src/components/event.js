import React from 'react';

export default function Event(props){
    
    const list = props.events.map((event, index) => {
        return (
        <tr>
            <td key={index}>
                {event.event}
            </td>
            <td key={index}>
                {event.date}
            </td>
        </tr>
        )
    })

    return(
        <table>
            <tr>
                <th>EVENT</th>
                <th>DATE</th>
            </tr>
            {list}
        </table>
    )
}