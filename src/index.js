import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider, Global } from '@emotion/react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {theme} from './Styles/theme'
import './i18n';
import { GlobalStyles } from './Styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Global styles={GlobalStyles}/>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>...is loading</div>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

