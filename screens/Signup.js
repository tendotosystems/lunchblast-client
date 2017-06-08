import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { authorizeUser, signupUser, clearError } from '../store/actions'
import { NavigationActions } from 'react-navigation'
<<<<<<< HEAD
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import FancyButton from '../components/FancyButton'
=======
import ErrorMessage from '../components/ErrorMessage'
>>>>>>> origin

class Signup extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
  }

  render() {
    const { signupUser, error, clearError } = this.props
    const { navigate } = this.props.navigation
    const { container, formStyle, inputStyle } = styles
    return (

      <View style={styles.container}>
        { error !== '' ? <ErrorMessage message={error} onClose={clearError} /> : null }
        <View style={styles.formStyle}>
          <TextInput
            style={inputStyle}
            placeholder="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            autoCorrect={false}
            autoCapitalize="none" />
          <TextInput
            style={inputStyle}
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })} 
            autoCorrect={false}
            autoCapitalize="none" />
          <TextInput
            style={inputStyle}
            secureTextEntry={true}
            placeholder="Confirm Passsword"
            value={this.state.password_confirmation}
            onChangeText={password_confirmation => this.setState({ password_confirmation })} 
            autoCorrect={false}
            autoCapitalize="none" />
          <FancyButton onPress={() => this.props.signupUser(this.state)} >
            Sign Up!
          </FancyButton>
          <Button 
            title="Back"
            onPress={() => 
              this.props.navigation.dispatch(NavigationActions.back())} 
            style={styles.backButtonStyle}
            color="#ffffff"/>
        </View>
        <Footer />
      </View>
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
    marginBottom: 10
  },
  formStyle: {
    flex: 2,
    marginTop: 35,
    marginBottom: 20
  }
});

const mapStateToProps = state => ({
  error: state.error
})
const mapDispatchToProps = dispatch => ({
  signupUser: (userInputs) => {
    dispatch(signupUser(userInputs))
  },
  clearError: () => { dispatch(clearError()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
