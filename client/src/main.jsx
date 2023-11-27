import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from "axios"

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.interceptors.request.use(request => {

  // Modify the request config
  const modifiedRequest = {
    ...request,
    headers: {
      ...request.headers,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    url: 'http://localhost:7000' + request.url,
  };

  return modifiedRequest;
}, error => {
  // Handle request errors
  return Promise.reject(error);
});
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
