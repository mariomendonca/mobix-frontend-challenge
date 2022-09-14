import { StackScreenProps } from "@react-navigation/stack";
import { Icon, Text, Button } from "@ui-kitten/components";
import { useState } from "react";
import { Alert, FlatList, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FilterOption } from "../../components/FilterOption";
import { AuthRoutesProps } from "../../routes/auth.routes";
import { logout, setTypes } from "../../store";
import { Container, FilterContainer, Header, TitleContainer } from "./styles";

type Props = StackScreenProps<AuthRoutesProps, 'Filter'>

export function Filter({ navigation }: Props) {
  const dispatch = useDispatch()
  const initialFilter = useSelector((state) => state.filter.value)
  const showAlert = () => Alert.alert('Sair', 'Tem certeza que deseja sair da sua conta?', [
    {
      text: 'Voltar',
    },
    {
      text: 'Sair',
      style: 'destructive',
      onPress: () => dispatch(logout())
    },
  ])

  const pokemonTypes = ['Todos', 'Água', 'Fogo', 'Planta', 'Fada', 'Fantasma', 'Gelo']
  const [selectedTypes, setSelectedTypes] = useState<Array<string>>(initialFilter)

  function handleSelectType(type: string) {
    if (type === 'Todos') {
      setSelectedTypes([])
      return
    }

    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(item => item !== type))
    } else {
      setSelectedTypes([...selectedTypes, type])
    }
  }

  function verifySelected(type: string) {
    if (selectedTypes.length === 0 && type === 'Todos') {
      return true
    }

    return selectedTypes.includes(type)
  }

  return (
    <Container>
      <Header>
        <TitleContainer>
          <Text
            category="h2"
          >
            Filtro
          </Text>

          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => setSelectedTypes([])}>
            <Text status="info">
              Limpar filtro
            </Text>
          </TouchableOpacity>
        </TitleContainer>

        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="close-outline" fill='#000' style={{ height: 35, width: 35 }} />
        </TouchableOpacity>
      </Header>

      <Text category="h6">
        Tipos
      </Text>

      <FilterContainer>
        <FlatList
          data={pokemonTypes}
          renderItem={({ item: type }) => (
            <FilterOption
              title={type}
              isSelected={verifySelected(type)}
              onPress={() => handleSelectType(type)}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />

        <Button size="large" onPress={() => {
          dispatch(setTypes(selectedTypes))
          navigation.goBack()
        }}>
          Aplicar filtro
        </Button>
      </FilterContainer>

      <Button size="large" status="danger" onPress={showAlert}>
        Fazer logout
      </Button>

    </Container>
  )
}