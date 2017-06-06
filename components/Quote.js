import React from 'react'
import { Text, StyleSheet } from 'react-native'
import fontStyles from '../styles/fonts';

const Quote = ({quote}) => (
  <Text style={styles.quoteStyle}>{quote}</Text>
)

const styles = StyleSheet.create({
  quoteStyle: {
    ...fontStyles,
    color: '#fff',
    fontSize: 14
  }
})

export default Quote