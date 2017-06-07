import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = ({ value,
                 onChangeText, 
                 placeholder,
                 secureTextEntry,
                 style }) => {
  
  return (
      <TextInput
        style={style}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize="none"
      />
  )
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  inputStyle: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 5,
    fontSize: 20,
    lineHeight: 23,
    height: 40,
    width: 200
  }
});