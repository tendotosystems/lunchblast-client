import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { authorizeUser, signupUser, clearError } from '../store/actions'
import { NavigationActions } from 'react-navigation'
import ErrorMessage from '../components/ErrorMessage'

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
  }

  render() {
    const { signupUser, error, clearError } = this.props
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.signupText}>Signup Screen</Text>
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
          <TextInput
            style={styles.inputStyle}
            secureTextEntry={true}
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChangeText={password_confirmation => this.setState({ password_confirmation })} 
            autoCorrect={false}
            autoCapitalize="none" />
          <Button title="Sign Up!" onPress={() => this.props.signupUser(this.state)} />
        </View>
        <Button title="Back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      </View>
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
  signupText: {
    color: '#fff',
    fontFamily: 'avenir-next-regular',
    fontSize: 24,
    marginBottom: 24
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
  signupUser: (userInputs) => {
    dispatch(signupUser(userInputs))
  },
  clearError: () => { dispatch(clearError()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
