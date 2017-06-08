import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image
    style={styles.imageStyle}
    source={require('../assets/icons/lunch-blast-logo.png')} />
)

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 15,
    height: 180,
    width: 270,
    resizeMode: 'contain'
  }
});

export default Logo;