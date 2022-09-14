import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity<{ isSelected: boolean }>`
  width: 160px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: ${({ isSelected }) => isSelected ? 'blue' : '#D8D8D8'};
  border-radius: 10px;
  margin-bottom: 20px;
`