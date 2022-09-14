import { NavigationContainer } from '@react-navigation/native'
import { Login } from '../screens/Login'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  return (
    <NavigationContainer>
      {false ? <Login /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
