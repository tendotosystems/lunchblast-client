import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const AppContent = ({onButtonPress}) => (
  <View>
    <Text style={styles.bodyText}>Open up main.js to start working on your app!</Text>
    <Button onPress={onButtonPress} title="Fetch Destination" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    fontFamily: 'avenir-next-regular'
  }
});

export default AppContent