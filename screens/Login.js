import React, { Component } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { authorizeUser } from '../store/actions'
import FancyButton from '../components/FancyButton'
import Logo from '../components/Logo'
import Footer from '../components/Footer'


class Login extends Component {
  state = { 
    email: '',
    password: ''
  };
  
  render() {
    const { authorizeUser } = this.props
    const { navigate } = this.props.navigation
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Logo />
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
            <FancyButton onPress={() => authorizeUser(this.state.email,
                                                      this.state.password)}>
                Log Me In!
            </FancyButton>
            <FancyButton onPress={() => navigate('Signup')}>
              Sign Me Up!
            </FancyButton>
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
    marginBottom: 15
  },
  formStyle: {
    flex: 2,
    marginTop: 30,
    marginBottom: 30
  }
});

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  authorizeUser: (email, password) => dispatch(authorizeUser(email, password)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
