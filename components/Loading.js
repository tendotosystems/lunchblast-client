import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

class Loading extends React.Component {
  render() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} color={'#fff'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 3,
    opacity: 0.5
  }
});

export default Loading
