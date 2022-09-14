import { Container, Content } from "../../styles/global"
import { Logo, Scroll, SearchContainer, SearchInput } from "./styles"
import logoImg from '../../assets/logo.png'
import { Icon } from "@ui-kitten/components"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../styles/colors"
import { Card } from "../../components/Card"
import { StackScreenProps } from "@react-navigation/stack"
import { AuthRoutesProps } from "../../routes/auth.routes"

type Props = StackScreenProps<AuthRoutesProps, 'Home'>

export function Home({ navigation }: Props) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  return (
    <Container>
      <Logo source={logoImg} />

      <SearchContainer>
        <SearchInput
          placeholder='Buscar Pokémon'
          placeholderTextColor={colors.lightGray}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Icon name="menu-outline" fill='#000' style={{ height: 35, width: 35 }} />
        </TouchableOpacity>
      </SearchContainer>

      <Scroll
        data={data}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 24 }}
        renderItem={({ item }: any) => (
          <Card />
        )}

      />

    </Container>
  )
}
