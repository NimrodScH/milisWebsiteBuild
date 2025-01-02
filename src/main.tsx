import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './DefaultTheme'; // Import your custom theme

const root = ReactDOM.createRoot(document.getElementById('app')!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
