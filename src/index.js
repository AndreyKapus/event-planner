import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider, Global } from '@emotion/react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {theme} from './Styles/theme'
import { GlobalStyles } from './Styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Global styles={GlobalStyles}/>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

