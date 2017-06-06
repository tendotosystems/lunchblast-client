import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import { authorizeUser, fetchDestination } from '../store/actions'
import Logo from './Logo'
import Footer from './Footer'
import ContentContainer from './ContentContainer'

class App extends React.Component {
  componentWillMount() {
    this.props.authorizeUser("guest@blastapp.io", "password")
  }
  
  render() {
    const { token, fetchDestination, isLoading } = this.props

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content" />
        <Logo />
        <ActivityIndicator animating={isLoading} style={styles.loadingIndicator} />
        <ContentContainer onButtonPress={() => fetchDestination(token)} />
        <Footer /> 
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
    padding: 15
  },
  loadingIndicator: {
    marginTop: 15,
    marginBottom: 10
  }
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
    fetchDestination: (token) => dispatch(fetchDestination(token)),
    authorizeUser: (email, password) => dispatch(authorizeUser(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
