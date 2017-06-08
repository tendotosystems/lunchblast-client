import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Quote from './Quote'

const Footer = ({quote}) => (
  <View style={styles.viewStyle}>
    { quote !== '' ? <Quote quote={quote} /> : null }
    <Image
      style={styles.imageStyle}
      source={require('../assets/icons/Checkerboard.png')}
    />
  </View>
)

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5
  },
  imageStyle: {
    resizeMode: 'repeat',
    height: 40,
    width: 400,
    marginTop: 10
  }
});

Footer.defaultProps = {
  quote: ''
}

export default Footer;