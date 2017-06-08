import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ErrorMessage = ({message, onClose}) => (
  message !== '' ? (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message}</Text>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  ) :
  null
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#c0392b',
    borderRadius: 3,
    marginBottom: 5,
    padding: 5
  },
  messageText: {
    fontFamily: 'avenir-next-regular',
    color: '#fff',
    padding: 0
  },
  closeButton: {
    padding: 2,
  },
  closeButtonText: {
    color: '#fff'
  }
})

export default ErrorMessage