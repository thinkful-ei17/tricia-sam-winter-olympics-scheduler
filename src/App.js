import React from 'react';
import './app.css';
import Input from './components/input';
import Results from './components/search-results';
import Selector from './components/date-selector';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchEvent: '',
            searchDate: 'all',
        }
    }

    updateSearchEventString(str) {
        console.log(str);
        this.setState({ searchEvent: str });
    }

    updateSearchDate(date) {
      console.log(date);
      this.setState({searchDate: date});
    }


    findEvent(str, date) {
     if (date === 'all'){
         return this.props.events.filter(event => 
            (event.event.toLowerCase().indexOf(str.toLowerCase()) > -1))
     } else {return this.props.events.filter(event => 
        (event.event.toLowerCase().indexOf(str.toLowerCase()) > -1) &&
        (event.date === date)
     )}  
    }

    render() {
        return ( 
          <div className = "App" >
            <Input searchString = { e => this.updateSearchEventString(e) }/> 
            <Selector events={this.props.events} searchDate={e => this.updateSearchDate(e)}/>
            <Results events={this.findEvent(this.state.searchEvent,this.state.searchDate)}/>
          </div>
        );
    }
  }
