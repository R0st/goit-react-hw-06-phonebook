import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { myAction } from './redux/actions';
import 'modern-normalize/modern-normalize.css';

// console.log(store);
// console.log(store.getState());
// store.dispatch(myAction);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);