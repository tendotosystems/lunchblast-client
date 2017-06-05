import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import Result from './Result';

class ContentContainer extends React.Component {
  render() {
    return (
      <View style={styles.contentContainerStyle}>
        <Button 
          onPress={() => console.log('button click')}
          style={styles.buttonStyle}>
            Where should we eat?
        </Button>
        <Result />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    flex: 2
  }
});

export default ContentContainer;