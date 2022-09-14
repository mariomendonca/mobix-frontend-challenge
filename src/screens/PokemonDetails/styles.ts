import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 50px 24px;
  padding-bottom: 0;
`

export const Content = styled.View`
  flex: 1;
`

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 30px;
`

export const TabBar = styled.View`
  flex-direction: row;
  height: 40px;
`

export const TabBarButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex: 1;
  border: 2px solid #000;
  border-bottom-color: ${({ isSelected }) => isSelected ? 'red' : '#000'};
  justify-content: center;
  align-items: center;
`

export const About = styled.View`
  flex: 1;
`

export const AboutTextContainer = styled.View`
  margin: 10px 0;
`