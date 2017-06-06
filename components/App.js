import React from 'react';
import { connect } from 'react-redux'
import { authorizeUser } from '../store/actions'
import MainNavigator from '../navigators/MainNavigator'
import AuthNavigator from '../navigators/AuthNavigator'

class App extends React.Component {
  componentWillMount() {
    this.props.authorizeUser("guest@blastapp.io", "password")
  }
  
  render() {
    return this.props.auth.isLoggedIn ? <MainNavigator /> : <AuthNavigator />
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authorizeUser: (email, password) => dispatch(authorizeUser(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
