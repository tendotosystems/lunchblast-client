import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/App'

const store = configureStore()

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

Expo.registerRootComponent(AppWithStore);
