import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Settings extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Settings Page</Text>
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
    justifyContent: 'flex-start',
    paddingTop: 15
  }
});

export default Settings