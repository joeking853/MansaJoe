import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from'./App'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';

const rootElement = document.getElementById("app");
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        rootElement
    )