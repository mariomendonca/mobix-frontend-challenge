import { createStackNavigator } from '@react-navigation/stack'
import { Filter } from '../screens/Filter'
import { Home } from '../screens/Home'
import { PokemonDetails } from '../screens/PokemonDetails'

export type AuthRoutesProps = {
  Home: undefined
  PokemonDetails: { name: string }
  Filter: undefined
}

export function AuthRoutes() {
  const { Navigator, Group, Screen } = createStackNavigator<AuthRoutesProps>()

  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='Home' component={Home} />
      <Screen name='PokemonDetails' component={PokemonDetails} />
      <Group screenOptions={{ presentation: 'modal' }}>
        <Screen name='Filter' component={Filter} />
      </Group>
    </Navigator>
  )
}