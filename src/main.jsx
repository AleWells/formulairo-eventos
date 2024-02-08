import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import theme from './theme.js';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import {store} from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <CssBaseline/>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </ThemeProvider>
  </React.StrictMode>,
)
