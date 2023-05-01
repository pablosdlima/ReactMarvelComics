import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Rotas from './routes';

export default function App() {
  return (
            <BrowserRouter history={history}>
                <Rotas/>
                <GlobalStyles/>
            </BrowserRouter>
  );
}
