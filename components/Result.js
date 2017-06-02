import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Result = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.destinationTitleStyle}>
        Krog Street Market
      </Text>
      <Text style={styles.destinationDistanceStyle}>
        0.2 miles away
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#fff',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
    padding: 20,
    marginTop: 25
  },
  destinationTitleStyle: {
    fontFamily: 'avenir-next-regular',
    fontSize: 20,
    fontWeight: '400'
  },
  destinationDistanceStyle: {
    fontSize: 10,
    color: '#808080'
  }
});

export default Result;