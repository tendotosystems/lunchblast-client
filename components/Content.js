import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FancyButton from './FancyButton';
import Result from './Result';
import { connect } from 'react-redux';

class Content extends React.Component {
  render() {
    const { onButtonPress, onResultPress, destination } = this.props
    return (
      <View style={styles.contentContainer}>
        <FancyButton onPress={onButtonPress}>
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
  contentContainer: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center'  
  }
});

export default Content
