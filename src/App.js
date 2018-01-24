import React from 'react';
import './app.css';
import Input from './components/input';
import Results from './components/search-results';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchEvent: '',
        }
    }

    updateSearchEventString(str) {
        console.log(str);
        this.setState({ searchEvent: str });
    }
    findEvent(str) {
     return this.props.events.filter(event => 
        event.event.toLowerCase().indexOf(str.toLowerCase()) > -1    
    )
  }


    render() {
        return ( 
          <div className = "App" >
            <Input searchString = { e => this.updateSearchEventString(e) }/> 
            <Results events = {this.findEvent(this.state.searchEvent)}/> 
          </div>
        );
    }
  }
