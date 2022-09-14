import { Button, Icon, Input } from "@ui-kitten/components"
import { AdviceText, Background, FormContainer, Logo, Margin20, Margin30, WelcomeText } from "./styles"

import backgroundImg from '../../assets/background.png'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { TouchableWithoutFeedback } from "react-native"

export function Login() {
  const [secureText, setSecureText] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={() => setSecureText(!secureText)}>
      <Icon {...props} name={secureText ? 'eye' : 'eye-off'} />
    </TouchableWithoutFeedback>
  );

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
        <Button size="large">
          Login
        </Button>
      </FormContainer>
    </Background>
  )
}
