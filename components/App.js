import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { fetchDestination } from '../store/actions'

class App extends React.Component {
  render() {
    const { token, fetchDestination } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.bodyText}>Open up main.js to start working on your app!</Text>
        <Button onPress={() => fetchDestination(token)} title="Fetch Destination" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    fontFamily: 'avenir-next-regular'
  }
});

const mapStateToProps = (state) => {
  console.log(state)
  return {
    token: state.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: (token) => dispatch(fetchDestination(token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
