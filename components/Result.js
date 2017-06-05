import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Result = () => {
  return (
    <TouchableOpacity 
      onPress={() => console.log('You selected Krog')} style={styles.buttonStyle}>
        <Text style={styles.destinationTitleStyle}>
          Krog Street Market
        </Text>
        <Text style={styles.destinationDistanceStyle}>
          0.2 miles away
        </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
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