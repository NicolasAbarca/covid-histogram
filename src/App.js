/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Reports from './container/landing';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Reports />
      </Provider>
    </div>
  );
}

export default App;
