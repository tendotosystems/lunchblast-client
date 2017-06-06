import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppStyles from './AppStyles';

const Button = ({ onPress, children }) => (
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2
  },
  textStyle: {
    ...AppStyles,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  }
});

export default Button;