import React, { Component } from 'react'
import { 
  View, StyleSheet, Button, 
  TouchableWithoutFeedback, TextInput, 
  Keyboard, ActivityIndicator, StatusBar,
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'
import { authorizeUser, clearError } from '../store/actions'
import FancyButton from '../components/FancyButton'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import ErrorMessage from '../components/ErrorMessage'
import fontStyles from '../styles/fonts'

class Login extends Component {
  state = { 
    email: '',
    password: ''
  };
  
  render() {
    const { authorizeUser, error, clearError, isLoading } = this.props
    const { navigate } = this.props.navigation
    const { container, inputStyle } = styles
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container}>
          <StatusBar
            barStyle="light-content" />
          <KeyboardAvoidingView behavior="position" contentContainerStyle={styles.contentContainer}>
            <Logo />
            <ErrorMessage message={error} onClose={clearError} />
            <ActivityIndicator animating={isLoading} style={styles.loadingStyle}/>
            <View style={{marginVertical: 10, width: '100%'}}>
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
            </View>
            <FancyButton onPress={() => authorizeUser(this.state.email,
                                                      this.state.password)}>
                Log In
            </FancyButton>
            <Button
               title="Sign Up"
               onPress={() => navigate('Signup')}
               color="#ffffff" />
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
    flexDirection: 'column',
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
  inputStyle: {
    ...fontStyles,
    borderRadius: 3,
    backgroundColor: '#fff',
    color: '#000',
    padding: 5,
    fontSize: 20,
    lineHeight: 23,
    height: 40,
    marginBottom: 10
  },
  loadingStyle: {
    marginTop: 10,
    marginBottom: 10
  }
});

const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading
})
const mapDispatchToProps = dispatch => ({
  authorizeUser: (email, password) => dispatch(authorizeUser(email, password)),
  clearError: () => dispatch(clearError()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
