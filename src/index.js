import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './admin/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import Router from './route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
    <Router />
  </BrowserRouter>
);


reportWebVitals();
