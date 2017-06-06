import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import Result from './Result';
import { connect } from 'react-redux';

class Content extends React.Component {
  render() {
    const { onButtonPress, onResultPress, destination } = this.props
    return (
      <View style={styles.contentContainerStyle}>
        <Button 
          onPress={onButtonPress}
          style={styles.buttonStyle}>
            Where should we eat?
        </Button>
        <Result 
          destination={destination}
          onResultPress={onResultPress} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    flex: 2
  }
});

export default Content
