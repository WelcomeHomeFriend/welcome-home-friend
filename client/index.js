import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// render(
//     <App>
//     </App>,
//     document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App/>
)