import React from 'react';

export default function Event(props){
    
    const list = props.events.map((event, index) => {
        return (
        <tr key={index}>
            <td >
                {event.event}
            </td>
            <td>
                {event.date}
            </td>
        </tr>
        )
    })

    return(
        <table className="results-table">
          <tbody>
            <tr>
                <th>EVENT</th>
                <th>DATE</th>
            </tr>
            {list}
            </tbody>
        </table>
    )
}