import Home from '../screens/Home'
import { StackNavigator } from 'react-navigation'

const MainNavigator = StackNavigator({
  Home: { screen: Home }
}, {
  headerMode: 'none'
})

export default MainNavigator