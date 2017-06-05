import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Footer = () =>
  <View style={styles.viewStyle}>
    <Text style={styles.guyQuoteStyle}>All the Flavor Town Quotes</Text>
    <Image
      style={styles.imageStyle}
      source={require('../assets/icons/Checkerboard.png')}
    />
  </View>;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  },
  imageStyle: {
    resizeMode: 'repeat',
    height: 20,
    width: 20
  },
  guyQuoteStyle: {
    fontFamily: 'avenir-next-regular',
    color: '#fff',
    fontSize: 16
  }
});

export default Footer;