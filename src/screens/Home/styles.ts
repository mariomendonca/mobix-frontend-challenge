import styled from 'styled-components/native'
import { colors } from '../../styles/colors'

export const Logo = styled.Image`
  width: 120px;
  height: 40px;
`

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px 0;
  padding: 0 24px;
`

export const SearchInput = styled.TextInput`
  height: 46px;
  border-radius: 30px;
  width: 80%;
  background: ${colors.background};
  padding: 0 20px;
`

export const Scroll = styled.FlatList`
  flex: 1;
  width: 100%;
`
