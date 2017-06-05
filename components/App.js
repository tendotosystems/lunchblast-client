import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { fetchDestination } from '../store/actions'
import Loading from './Loading'
import AppContent from './AppContent'

class App extends React.Component {
  render() {
    const { token, fetchDestination, isLoading } = this.props

    return (
      <View style={styles.container}>
        { 
          isLoading ? 
            <Loading /> : 
            <AppContent onButtonPress={() => fetchDestination(token)}/> 
        }
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
});

const mapStateToProps = (state) => {
  console.log(state)
  return {
    token: state.token,
    isLoading: state.isLoading
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
