import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Button } from 'react-native';
import { authorizeUser, fetchDestination, clearError, makeSelection } from '../store/actions'
import Logo from '../components/Logo'
import ErrorMessage from '../components/ErrorMessage'
import Footer from '../components/Footer'
import Content from '../components/Content'
import Notification from '../components/Notification'

class Home extends React.Component {  
  render() {
    const { 
      token, fetchDestination, isLoading, 
      quote, destination, error, clearError,
      makeSelection, user, notification 
    } = this.props
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content" />
        <View style={styles.contentContainer}>
          <Notification>
            {notification}
          </Notification>
          <Logo />
          <ErrorMessage message={error} onClose={clearError} />
          <ActivityIndicator animating={isLoading} style={styles.loadingIndicator} />
          <Content 
            onButtonPress={() => fetchDestination(token)}
            onResultPress={() => makeSelection(user, token, destination)}
            destination={destination} />
          <Button 
            onPress={() => navigate('Settings')}
            title="Settings"
            color="#fff" />
        </View>
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
  contentContainer: {
    marginTop: 50,
    height: 500,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start' 
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
    user: state.user,
    quote: state.quote,
    destination: state.destination,
    error: state.error,
    notification: state.notification.a
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: (token) => dispatch(fetchDestination(token)),
    clearError: () => dispatch(clearError()),
    makeSelection: (user, token, destination) => dispatch(makeSelection(user, token, destination))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
