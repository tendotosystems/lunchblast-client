import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { logout } from '../store/actions'
import fontStyles from '../styles/fonts'
import Footer from '../components/Footer'

class Settings extends React.Component {
  back() {
    this.props.navigation.dispatch(
      NavigationActions.back()
    )
  }
  logout() {
    this.props.logout()
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => this.back()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => this.logout()}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingTop: 15
  },
  title: {
    ...fontStyles,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 25,
    width: 250,
    marginVertical: 10
  },
  buttonText: {
    ...fontStyles,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center'
  }
});

const mapStateToProps = state => ({ 
  user: state.user 
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
