import React, { Component } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { authorizeUser, clearError } from '../store/actions'
import Button from '../components/Button'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import ErrorMessage from '../components/ErrorMessage'


class Login extends Component {
  state = { 
    email: '',
    password: ''
  };
  
  render() {
    const { authorizeUser, error, clearError } = this.props
    const { navigate } = this.props.navigation
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Logo />
          { error !== '' ? <ErrorMessage message={error} onClose={clearError} /> : null }
          <View style={styles.formStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              autoCorrect={false}
              autoCapitalize="none" />
            <TextInput
              style={styles.inputStyle}
              secureTextEntry={true}
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })} 
              autoCorrect={false}
              autoCapitalize="none" />
            <Button onPress={() => authorizeUser(this.state.email,
                                                 this.state.password)}>
                Log Me In!
            </Button>
            <Button onPress={() => navigate('Signup')}>
              Sign Me Up!
            </Button>
          </View>
          <Footer />
        </View>
      </TouchableWithoutFeedback>
    )
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
  inputStyle: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 5,
    fontSize: 20,
    lineHeight: 23,
    height: 40,
    width: 200,
    marginBottom: 25
  },
  formStyle: {
    flex: 2,
    marginTop: 45,
    marginBottom: 30
  }
});

const mapStateToProps = state => ({
  error: state.error
})
const mapDispatchToProps = dispatch => ({
  authorizeUser: (email, password) => dispatch(authorizeUser(email, password)),
  clearError: () => dispatch(clearError()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
