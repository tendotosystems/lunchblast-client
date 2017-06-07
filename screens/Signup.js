import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { authorizeUser } from '../store/actions'
import { NavigationActions } from 'react-navigation'

class Signup extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.signupText}>Signup Screen</Text>
        <Button title="Back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05224B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15
  },
  signupText: {
    color: '#fff',
    fontFamily: 'avenir-next-regular',
    fontSize: 24,
    marginBottom: 24
  }
});

export default Signup
