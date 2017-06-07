import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { authorizeUser } from '../store/actions'
import Button from '../components/Button'

class Login extends React.Component {
  render() {
    const { authorizeUser } = this.props
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Login Screen</Text>
        <Button onPress={() => authorizeUser("guest@blastapp.io", "password")}>
          Log Me In!
        </Button>
        <Button onPress={() => navigate('Signup')}>
          Sign Me Up!
        </Button>
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
  loginText: {
    color: '#fff',
    fontFamily: 'avenir-next-regular',
    fontSize: 24,
    marginBottom: 24
  }
});

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  authorizeUser: (email, password) => dispatch(authorizeUser(email, password)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
