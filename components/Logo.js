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
    height: 250,
    width: 250,
    resizeMode: 'contain'
  }
});

export default Logo;