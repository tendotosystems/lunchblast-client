import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ErrorMessage = ({message, onClose}) => (
  <View style={styles.container}>
    <Text>{message}</Text>
    <Button title="X" onPress={onClose} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
export default ErrorMessage