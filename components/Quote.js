import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import fontStyles from '../styles/fonts';

const Quote = ({quote}) => (
  <View>
    <Text style={styles.quoteStyle}>{quote}</Text>
    <Text style={styles.quoteStyle}> - Guy Fieri</Text>
  </View>
)

const styles = StyleSheet.create({
  quoteStyle: {
    ...fontStyles,
    color: '#fff',
    fontSize: 14,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center'
  }
})

export default Quote