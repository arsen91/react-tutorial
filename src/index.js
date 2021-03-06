import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './components/App';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),
    document.getElementById('app')
);