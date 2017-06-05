import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import configureStore from './store'
import App from './components/App'
import cacheAssets from './utils/cacheAssets'
import Image from 'react-native';

const store = configureStore()
persistStore(store, {storage: AsyncStorage})

class AppWithStore extends React.Component {
  state = {
    appIsReady: false
  }

  componentWillMount() {
    this._loadAssetsAsync()
  }

  _loadAssetsAsync = async () => {
    try {
      await cacheAssets({
        images: [
          require('./assets/icons/Checkerboard.png')
        ], 
        fonts: [
          {'avenir-next-regular': require('./assets/fonts/avenir-next-regular.ttf')},
          {'avenir-next-bold': require('./assets/fonts/avenir-next-bold.ttf')}
        ]
      });
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
    if(this.state.appIsReady) {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      )
    } else {
      return <Expo.AppLoading />
    }
  }
}

Expo.registerRootComponent(AppWithStore);
