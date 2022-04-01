import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import AppRouter from './routes';

ReactDOM.render(
    <React.StrictMode>
        <AppRouter></AppRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// https://github.com/alura-cursos/aluroni-introducao
// https://github.com/alura-cursos/aluroni-router