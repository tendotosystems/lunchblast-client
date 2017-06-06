import Login from '../screens/Login'
import { StackNavigator } from 'react-navigation'

const AuthNavigator = StackNavigator({
  Login: { screen: Login },
}, {
  headerMode: 'none'
})

export default AuthNavigator