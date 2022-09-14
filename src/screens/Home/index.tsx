import { CenterView, Container } from "../../styles/global"
import { Logo, Scroll, SearchContainer, SearchInput } from "./styles"
import logoImg from '../../assets/logo.png'
import { Icon } from "@ui-kitten/components"
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../styles/colors"
import { Card } from "../../components/Card"
import { StackScreenProps } from "@react-navigation/stack"
import { AuthRoutesProps } from "../../routes/auth.routes"
import { useEffect, useState } from "react"
import { getAll } from "../../services/pokemon"

type Props = StackScreenProps<AuthRoutesProps, 'Home'>

export function Home({ navigation }: Props) {
  const [searchInput, setSearchInput] = useState('')

  const [data, setData] = useState<Array<any>>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [getMoreLoading, setGetMoreLoading] = useState(false)
  const [endOfFetch, setEndOfFetch] = useState(false)

  async function handleGetAllPokemons() {
    const response = await getAll(0)
    setData(response.data.results)
    setIsLoading(false)
  }

  async function handleGetMorePokemons() {
    setGetMoreLoading(true)
    const response = await getAll(page)
    if (response.data.results.length > 0) {
      setData([...data, ...response.data.results])
      setPage(prevState => prevState + 1)
    } else {
      setEndOfFetch(true)
    }
    setGetMoreLoading(false)
  }

  useEffect(() => {
    handleGetAllPokemons()
  }, [])

  useEffect(() => {
    // TODO: search by name function
  }, [])

  function RenderNoMorePokemons() {
    return (
      <CenterView>
        <Text>Você ja viu tudo!</Text>
      </CenterView>
    )
  }

  function renderFooterLoading() {
    if (getMoreLoading) {
      return (
        <CenterView>
          <ActivityIndicator color='#000' size='large' />
        </CenterView>
      )
    }
  }

  return (
    <Container>
      <Logo source={logoImg} />

      <SearchContainer>
        <SearchInput
          placeholder='Buscar Pokémon'
          placeholderTextColor={colors.lightGray}
          value={searchInput}
          onChangeText={setSearchInput}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Icon name="menu-outline" fill='#000' style={{ height: 35, width: 35 }} />
        </TouchableOpacity>
      </SearchContainer>

      {!isLoading ? (
        <Scroll
          keyExtractor={(item: any) => item.name}
          data={data}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 24 }}
          renderItem={({ item }: any) => (
            <Card name={item.name} />
          )}
          onEndReached={handleGetMorePokemons}
          onEndReachedThreshold={endOfFetch ? 0.1 : 0}
          ListFooterComponent={endOfFetch ? RenderNoMorePokemons : renderFooterLoading}
        />
      ) : (
        <CenterView>
          <ActivityIndicator color='#000' size='large' />
        </CenterView>
      )}

    </Container>
  )
}
