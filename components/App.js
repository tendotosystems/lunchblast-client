import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import { authorizeUser, fetchDestination } from '../store/actions'
import Logo from './Logo'
import Footer from './Footer'
import Content from './Content'

class App extends React.Component {
  componentWillMount() {
    this.props.authorizeUser("guest@blastapp.io", "password")
  }
  
  render() {
    const { token, fetchDestination, isLoading, quote, destination } = this.props

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content" />
        <Logo />
        <ActivityIndicator animating={isLoading} style={styles.loadingIndicator} />
        <Content 
          onButtonPress={() => fetchDestination(token)}
          onResultPress={() => console.log("Krog")}
          destination={destination} />
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
    justifyContent: 'flex-start',
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
    token: state.token,
    isLoading: state.isLoading,
    quote: state.quote,
    destination: state.destination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: (token) => dispatch(fetchDestination(token)),
    authorizeUser: (email, password) => dispatch(authorizeUser(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
