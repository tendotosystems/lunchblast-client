import React from 'react'
import { View, Text, Button } from 'react-native'

const ErrorMessage = ({message, onClose}) => (
  <View>
    <Text>{message}</Text>
    <Button title="Close" onPress={onClose} />
  </View>
)

export default ErrorMessage