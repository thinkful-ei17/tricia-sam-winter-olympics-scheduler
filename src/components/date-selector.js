import React from 'react';

export default function Selector(props) {
    console.log(props.events);
    const filteredDates = props.events.filter((event, index) => {
        for (let i = 0; i < index; i++) {
            if (event.date === props.events[i].date) {
                return false;
            }
        }
        return true;
    });
    console.log(filteredDates);

    const dates = filteredDates.map((event, index) => {
      return ( 
        <option key={index}
            value={event.date} > {event.date} 
        </option>
      )
    })

    return ( 
      <select onChange = { e => props.searchDate(e.target.value) }> 
          {dates}
      </select>
    )
}