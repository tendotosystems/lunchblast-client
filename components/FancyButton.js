import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import fontStyles from '../styles/fonts';

const FancyButton = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
      {children}
    </Text>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: '#D91C5C',
    overflow: 'hidden',
    marginBottom: 10
  },
  textStyle: {
    ...fontStyles,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  }
});

export default FancyButton;