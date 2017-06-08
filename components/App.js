import React from 'react';
import { connect } from 'react-redux'
import { View, StatusBar } from 'react-native'
import { authorizeUser } from '../store/actions'
import MainNavigator from '../navigators/MainNavigator'
import AuthNavigator from '../navigators/AuthNavigator'

const App = ({auth}) => auth.isLoggedIn ? <MainNavigator /> : <AuthNavigator />

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => ({
  authorizeUser: (email, password) => dispatch(authorizeUser(email, password))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
