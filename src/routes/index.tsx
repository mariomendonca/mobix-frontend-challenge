import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
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
