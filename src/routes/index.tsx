import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Login } from '../screens/Login'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const user = useSelector((state: any) => state.user.value)

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <Login />}
    </NavigationContainer>
  )
}
