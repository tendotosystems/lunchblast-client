import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button'

class ContentContainer extends React.Component {
  render() {
    return (
      <View style={styles.contentContainerStyle}>
        <Button onPress={() => console.log('button click')}>
          Where should we eat?
        </Button>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5
  }
});

export default ContentContainer;