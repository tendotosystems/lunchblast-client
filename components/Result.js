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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    padding: 20,
    marginTop: 25
  },
  destinationTitleStyle: {
    ...fontStyles,
    fontSize: 20,
    fontWeight: '400'
  },
  destinationDistanceStyle: {
    fontSize: 10,
    color: '#808080'
  }
});

export default Result;