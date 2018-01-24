import React from 'react';
import './app.css';
import Input from './components/input';
import Results from './components/search-results';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchEvent: '',
    }
  }

  updateSearchEventString(str){
    this.setState({searchEvent: str});
  }

  render() {
  
    return (
      <div className="App">
        <Input searchString={e => this.updateSearchEventString(e)}/>
        <Results events={this.props.events}/>
      </div>
    );
  }
}
