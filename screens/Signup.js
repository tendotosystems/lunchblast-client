import React from 'react'
import { 
  View, Text, Button, TouchableWithoutFeedback,
  StyleSheet, TextInput, Keyboard,
  ActivityIndicator, StatusBar, KeyboardAvoidingView 
} from 'react-native'
import { connect } from 'react-redux'
import { authorizeUser, signupUser, clearError } from '../store/actions'
import { NavigationActions } from 'react-navigation'
import Logo from '../components/Logo'
import FancyButton from '../components/FancyButton'
import ErrorMessage from '../components/ErrorMessage'
import Footer from '../components/Footer'
import fontStyles from '../styles/fonts'

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
  }

  render() {
    const { signupUser, error, clearError, isLoading } = this.props
    const { navigate } = this.props.navigation
    const { container, inputStyle } = styles
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content" />
          <Logo />
          <ErrorMessage message={error} onClose={clearError} />
          <ActivityIndicator animating={isLoading} />
          <KeyboardAvoidingView behavior="padding">
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
              Sign Up
            </FancyButton>
            <Button 
              title="Back"
              onPress={() => 
                this.props.navigation.dispatch(NavigationActions.back())}
              color="#ffffff"/>
          </KeyboardAvoidingView>
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
    justifyContent: 'center',
    paddingTop: 15
  },
  inputStyle: {
    ...fontStyles,
    borderRadius: 3,
    backgroundColor: '#fff',
    color: '#000',
    padding: 5,
    fontSize: 20,
    lineHeight: 23,
    height: 40,
    width: 200,
    marginBottom: 10
  }
});

const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading
})
const mapDispatchToProps = dispatch => ({
  signupUser: (userInputs) => {
    dispatch(signupUser(userInputs))
  },
  clearError: () => { dispatch(clearError()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
