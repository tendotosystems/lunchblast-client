import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = ({ source }) => {
  return (
    <Image
      style={styles.imageStyle}
      source={source}
    />
  )
};

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 15,
    height: 200,
    width: 300,
    resizeMode: 'contain'
  }
});

export default Logo;