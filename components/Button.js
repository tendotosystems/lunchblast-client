import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#D91C5C',
    overflow: 'hidden'
  },
  textStyle: {
    fontFamily: 'avenir-next-regular',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  }
});

export default Button;