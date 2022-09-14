import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'

export function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='Home' component={Home} />
    </Navigator>
  )
}