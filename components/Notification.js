import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Notification = ({ message, onClose }) => (
  message !== '' ? (
    <View style={styles.messageContainer}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  ) :
  null
)

styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  text: {
    fontFamily: 'avenir-next-regular',
    textAlign: 'center',
    padding: 0
  },
  closeButton: {
    padding: 2,
  },
  closeButtonText: {
    marginLeft: 5,
    color: '#000'
  }
});

export default Notification;