import styled from 'styled-components/native'

export const InputContainer = styled.View<{ mTop?: string, mBottom?: string }>`
  width: 100%;
  margin-top: ${({ mTop }) => mTop || 0};
  margin-bottom: ${({ mBottom }) => mBottom || 0};
`
