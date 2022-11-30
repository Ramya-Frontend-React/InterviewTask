import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './admin/sidebar';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import Router from './route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Sidebar/>
    <Router />
  </BrowserRouter>
);


reportWebVitals();
