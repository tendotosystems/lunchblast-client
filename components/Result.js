import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import fontStyles from '../styles/fonts';

const Result = ({ destination, onResultPress }) => (
  <TouchableOpacity 
    onPress={onResultPress} style={styles.buttonStyle}>
      <Text style={styles.destinationTitleStyle}>
        {destination.name}
      </Text>
      <Text style={styles.destinationDistanceStyle}>
        {destination.distance_to}
      </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 25,
    width: 250
  },
  destinationTitleStyle: {
    ...fontStyles,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center'
  },
  destinationDistanceStyle: {
    fontSize: 10,
    color: '#808080'
  }
});

export default Result;