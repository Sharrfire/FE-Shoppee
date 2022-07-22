import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { SnackbarProvider } from 'notistack';
// import { Provider } from 'react-redux';
// import store from './app/store';
// import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}> */}
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>,

  // <React.StrictMode>

  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
