import { Button, Icon, Input } from "@ui-kitten/components"
import { AdviceText, Background, FormContainer, Logo, Margin20, Margin30, WelcomeText } from "./styles"

import backgroundImg from '../../assets/background.png'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { ActivityIndicator, Alert, TouchableWithoutFeedback } from "react-native"
import { login as postLogin } from "../../services/users"
import { useDispatch } from "react-redux"
import { login } from "../../store"

export function Login() {
  const [secureText, setSecureText] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={() => setSecureText(!secureText)}>
      <Icon {...props} name={secureText ? 'eye' : 'eye-off'} />
    </TouchableWithoutFeedback>
  );

  async function handleLogin() {
    setIsLoading(true)
    try {
      const { data } = await postLogin(email, password)
      dispatch(login(data))
    } catch {
      Alert.alert('Erro no login', 'Credenciais inválidas')
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <Background source={backgroundImg}>
      <Logo source={logo} />
      <FormContainer>
        <WelcomeText>
          Bem-vindo
        </WelcomeText>
        <AdviceText>
          Insira os seus dados para acessar
        </AdviceText>
        <Input
          size='large'
          label='Email'
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
        />
        <Margin20 />
        <Input
          label='Senha'
          secureTextEntry={secureText}
          accessoryRight={renderIcon}
          size='large'
          value={password}
          onChangeText={setPassword}
        />
        <Margin30 />
        <Button 
          size="large" 
          disabled={isLoading || (!email || !password)}
          onPress={handleLogin}
        >
          {!isLoading ? 'Login' : <ActivityIndicator />}
        </Button>
      </FormContainer>
    </Background>
  )
}
