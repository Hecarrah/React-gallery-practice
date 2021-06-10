import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import About from './About';
import './index.css';

import reportWebVitals from './reportWebVitals';
  const router = (
   <Router>
      <div>
         <Route exact path="/" component={App} />
         <Route exact path="/about" component={About} />
      </div>
   </Router>
);

ReactDOM.render(router,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
