import React from 'react';
import './App.css';
import Component from './Component/';
import { store, persistor } from './store/index'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <Component />
      </PersistGate>
    </Provider>

  );
}

export default App;
