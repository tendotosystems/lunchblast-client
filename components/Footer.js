import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Quote from './Quote'

const Footer = ({quote}) => (
  <View style={styles.viewStyle}>
    <Quote quote={quote} />
    <Image
      style={styles.imageStyle}
      source={require('../assets/icons/Checkerboard.png')}
    />
  </View>
)

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  },
  imageStyle: {
    resizeMode: 'repeat',
    height: 20,
    width: 20
  }
});

export default Footer;