import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { logout } from '../store/actions'

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
        <Text>Settings Page</Text>
        <Button title="Back" onPress={() => this.back()} />
        <Button title="Logout" onPress={() => this.logout()} />
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
  }
});

const mapStateToProps = state => ({ 
  user: state.user 
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
