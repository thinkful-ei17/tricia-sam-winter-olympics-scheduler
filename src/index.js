import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import events from './Events.json'

ReactDOM.render(<App events={events}/>, document.getElementById('root'));
