import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FancyButton from './FancyButton';
import Result from './Result';
import { connect } from 'react-redux';

class Content extends React.Component {
  render() {
    const { onButtonPress, onResultPress, destination } = this.props
    return (
      <View style={styles.contentContainerStyle}>
        <FancyButton 
          onPress={onButtonPress}
          style={styles.buttonStyle}>
            Where should we eat?
        </FancyButton>
        { 
          destination.id ? 
          <Result 
            destination={destination}
            onResultPress={onResultPress} /> : null
        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: 10,
    flex: 2
  }
});

export default Content
