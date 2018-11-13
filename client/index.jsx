/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Updates from './components/app';
import MainNav from './components/mainNav';

// window.Updates = Updates;

// document.on('DOMContentLoaded', () => {
ReactDOM.render(<Updates />, document.getElementById('Updates'));
ReactDOM.render(<MainNav />, document.getElementById('MainNav'));
// });
