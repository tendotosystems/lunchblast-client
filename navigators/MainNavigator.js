import Home from '../screens/Home'
import Settings from '../screens/Settings'
import { StackNavigator } from 'react-navigation'

const MainNavigator = StackNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings }
}, {
  headerMode: 'none'
})

export default MainNavigator