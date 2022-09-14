import { InputProps} from '@ui-kitten/components'
import { InputContainer } from './styles'

interface IInput extends InputProps {
  mBottom?: string
  mTop?: string
}

export function Input({mBottom, mTop, ...rest}: IInput) {
  return (
    <InputContainer mBottom={mBottom} mTop={mTop}>
      <Input {...rest}/>
    </InputContainer>
  )
}