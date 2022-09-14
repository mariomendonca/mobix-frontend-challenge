import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Login } from '../screens/Login'
import { AuthRoutes } from './auth.routes'
import { useEffect, useState } from 'react';
import { CenterView } from '../styles/global';
import { ActivityIndicator } from 'react-native';
import { USER_ID } from '../utils';
import { getById } from '../services/users';
import { login } from '../store';

export function Routes() {
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user.value)

  async function handleVerifyUserLogged() {
    const userId = await AsyncStorage.getItem(USER_ID)
    if (!userId) {
      setIsLoading(false)
      return
    }

    const { data } = await getById(userId)
    dispatch(login(data))
    setIsLoading(false)
  }

  useEffect(() => {
    handleVerifyUserLogged()
  }, [])

  if (isLoading) {
    return (
      <CenterView>
        <ActivityIndicator size='large' color='#000' />
      </CenterView>
    )
  }


  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <Login />}
    </NavigationContainer>
  )
}
