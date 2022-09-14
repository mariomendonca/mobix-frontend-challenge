import { createStackNavigator } from '@react-navigation/stack'
import { Filter } from '../screens/Filter'
import { Home } from '../screens/Home'

export type AuthRoutesProps = {
  Home: undefined
  PokemonDetails: undefined
  Filter: undefined
}

export function AuthRoutes() {
  const { Navigator, Group, Screen } = createStackNavigator<AuthRoutesProps>()

  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='Home' component={Home} />
      <Group screenOptions={{ presentation: 'modal' }}>
        <Screen name='Filter' component={Filter} />
      </Group>
    </Navigator>
  )
}