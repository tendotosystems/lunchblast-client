import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Logo';
import ContentContainer from './ContentContainer'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo source={require('../assets/icons/lunch-blast-logo.png')}/>
        <ContentContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05224B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  }
  // bodyText: {
  //   fontFamily: 'avenir-next-regular'
  // }
});

export default App;
