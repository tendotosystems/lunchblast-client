import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/App'
import cacheAssets from './utils/cacheAssets'

const store = configureStore()

class AppWithStore extends React.Component {
  // Move this to redux
  state = {
    appIsReady: false
  }

  componentWillMount() {
    this._loadAssetsAsync()
  }

  _loadAssetsAsync = async () => {
    try {
      await cacheAssets({});
    } catch(e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      )
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

Expo.registerRootComponent(AppWithStore);
