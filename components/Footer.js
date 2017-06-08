import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Quote from './Quote'

const Footer = ({quote}) => (
  <View>
    { quote !== '' ? <Quote quote={quote} /> : null }
    <Image
      style={styles.imageStyle}
      source={require('../assets/icons/Checkerboard.png')}
    />
  </View>
)

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: 'repeat',
    height: 40,
    marginTop: 10
  }
});

Footer.defaultProps = {
  quote: ''
}

export default Footer;