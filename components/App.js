import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Logo';
import ContentContainer from './ContentContainer';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo source={require('../assets/icons/lunch-blast-logo.png')}/>
        <ContentContainer />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05224B',
    alignItems: 'center',
    padding: 15
  }
});

export default App;
