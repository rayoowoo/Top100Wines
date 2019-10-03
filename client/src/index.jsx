import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascripts/app';



document.addEventListener("DOMContentLoaded", e => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
})