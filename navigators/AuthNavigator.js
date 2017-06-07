import Login from '../screens/Login'
import Signup from '../screens/Signup'
import { StackNavigator } from 'react-navigation'

const AuthNavigator = StackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup }
}, {
  headerMode: 'none'
})

export default AuthNavigator