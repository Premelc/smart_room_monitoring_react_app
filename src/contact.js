import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Navbar from './navbar';
import Outer from './outer.js';
import reportWebVitals from './reportWebVitals';
import Bottombar from "./bottombar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar />
        <Outer>
                <h1>KURAC</h1>
        </Outer>
        <Bottombar/>
    </React.StrictMode>
);
