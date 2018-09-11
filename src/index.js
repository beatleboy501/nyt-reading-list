import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as config from './config.json';

ReactDOM.render(
  <BrowserRouter><App config={config} /></BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
