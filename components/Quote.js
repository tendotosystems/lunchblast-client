import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Quote = ({quote}) => (
  <Text style={styles.quoteStyle}>{quote}</Text>
)

const styles = StyleSheet.create({
  quoteStyle: {
    fontFamily: 'avenir-next-regular',
    color: '#fff',
    fontSize: 14
  }
})

export default Quote