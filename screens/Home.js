import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Button } from 'react-native';
import { authorizeUser, fetchDestination, clearError } from '../store/actions'
import Logo from '../components/Logo'
import ErrorMessage from '../components/ErrorMessage'
import Footer from '../components/Footer'
import Content from '../components/Content'

class Home extends React.Component {  
  render() {
    const { token, fetchDestination, isLoading, quote, destination, error, clearError } = this.props
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content" />
        <Logo />
        <ErrorMessage message={error} onClose={clearError} />
        <ActivityIndicator animating={isLoading} style={styles.loadingIndicator} />
        <Content 
          onButtonPress={() => fetchDestination(token)}
          onResultPress={() => console.log("Krog")}
          destination={destination} />
        <Button onPress={() => navigate('Settings')} title="Settings" />
        <Footer quote={quote} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05224B',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  loadingIndicator: {
    marginTop: 10,
    marginBottom: 10
  }
});

const mapStateToProps = (state) => {
  console.log(state)
  return {
    token: state.auth.token,
    isLoading: state.isLoading,
    quote: state.quote,
    destination: state.destination,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: (token) => dispatch(fetchDestination(token)),
    clearError: () => dispatch(clearError())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
