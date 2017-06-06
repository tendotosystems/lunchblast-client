import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import Result from './Result';
import { connect } from 'react-redux';

class Content extends React.Component {
  render() {
    return (
      <View style={styles.contentContainerStyle}>
        <Button 
          onPress={this.props.onButtonPress}
          style={styles.buttonStyle}>
            Where should we eat?
        </Button>
        <Result destination={this.props.destination}/>
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

const ContentContainer = connect(
  state => ({
    destination: state.destination
  }),
  
)(Content);

export default ContentContainer;