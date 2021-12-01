import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';


import './index.css';
import reactDom from 'react-dom';

const divRoot = document.querySelector('#root');


//ReactDOM.render(<PrimeraApp saludo="Hola soy fany" />, divRoot);

ReactDOM.render(<PrimeraApp saludo='propTypes' /> ,divRoot)