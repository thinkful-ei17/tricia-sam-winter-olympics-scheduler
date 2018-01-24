import React from 'react';
import './app.css';
import Input from './components/input';
import Results from './components/search-results';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
  
    return (
      <div className="App">
        <Input />
        <Results events={this.props.events}/>
      </div>
    );
  }
}
