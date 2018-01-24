import React from 'react';

export default function Selector(props) {
    const filteredDates = props.events.filter((event, index) => {
        for (let i = 0; i < index; i++) {
            if (event.date === props.events[i].date) {
                return false;
            }
        }
        return true;
    });

    const sortedFilteredDates = filteredDates.sort((a,b) => a.date > b.date);

    const dates = sortedFilteredDates.map((event, index) => {
      return ( 
        <option key={index} value={event.date}> 
            {event.date} 
        </option>
      )
    });

    return ( 
    <form className="date">
        <label htmlFor="date-filter">Date:</label>
        <select id="date-filter" onChange = { e => props.searchDate(e.target.value) }> 
            <option value="all">All</option>
            {dates}
        </select>
    </form>
    )
}