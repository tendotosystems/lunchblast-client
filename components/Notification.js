import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Notification = ({ children }) => (
  <View style={styles.messageContainer}>
    <Text style={styles.text}>
      {children}
    </Text>
    <TouchableOpacity style={styles.closeButton}>
      <Text style={styles.closeButtonText}>X</Text>
    </TouchableOpacity>
  </View>
)

styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius: 3,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  text: {
    fontFamily: 'avenir-next-regular',
    textAlign: 'center',
  },
  closeButton: {
    padding: 2,
  },
  closeButtonText: {
    marginLeft: 5,
    color: '#fff'
  }
});

export default Notification;