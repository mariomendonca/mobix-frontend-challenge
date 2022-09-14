import { StackScreenProps } from "@react-navigation/stack";
import { Icon, Text } from "@ui-kitten/components";
import { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { AuthRoutesProps } from "../../routes/auth.routes";
import { getPokemonByName } from "../../services/pokemon";
import { CenterView } from "../../styles/global";
import { getString } from "../../utils";
import { About, AboutTextContainer, Container, Content, Header, TabBar, TabBarButton } from "./styles";

type Props = StackScreenProps<AuthRoutesProps, 'PokemonDetails'>

export function PokemonDetails({ navigation, route }: Props) {
  const [tabSelected, setTabSelected] = useState('Sobre')
  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState<any>({})
  const { name } = route.params

  async function handleGetPokemonByName() {
    const { data } = await getPokemonByName(name)
    setPokemon(data)
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetPokemonByName()
  }, [])

  return (
    <Container>
      <TouchableOpacity onPress={navigation.goBack}>
        <Icon name="arrow-back-outline" fill='#000' style={{ height: 35, width: 35 }} />
      </TouchableOpacity>

      {isLoading ? (
        <CenterView>
          <ActivityIndicator color='#000' size='large' />
        </CenterView>
      ) : (
        <Content>
          <Header>
            <Text category="h4">
              {pokemon.name}
            </Text>
            <Text category="h6">
              #{pokemon.id}
            </Text>
          </Header>

          <TabBar>
            <TabBarButton
              onPress={() => setTabSelected('Sobre')}
              isSelected={tabSelected === 'Sobre'}
            >
              <Text>
                Sobre
              </Text>
            </TabBarButton>
            <TabBarButton
              onPress={() => setTabSelected('Status')}
              isSelected={tabSelected === 'Status'}
            >
              <Text>
                Status
              </Text>
            </TabBarButton>
            <TabBarButton
              onPress={() => setTabSelected('Movimentos')}
              isSelected={tabSelected === 'Movimentos'}
            >
              <Text>
                Movimentos
              </Text>
            </TabBarButton>
          </TabBar>

          {tabSelected === 'Sobre' && (
            <About>
              <AboutTextContainer>
                <Text appearance="hint" >Tamanho:{' '}
                  <Text>{pokemon.height}</Text>
                </Text>
              </AboutTextContainer>
              <AboutTextContainer>
                <Text appearance="hint" >Peso:{' '}
                  <Text>{pokemon.weight}</Text>
                </Text>
              </AboutTextContainer>
              <AboutTextContainer>
                <Text appearance="hint" >Habilidades:{' '}
                  <Text>{getString(pokemon.abilities, (item: any) => item.ability.name)}</Text>
                </Text>
              </AboutTextContainer>
              <AboutTextContainer>
                <Text appearance="hint" >Tipos:{' '}
                  <Text>{getString(pokemon.types, (item: any) => item.type.name)}</Text>
                </Text>
              </AboutTextContainer>
            </About>
          )}
          {tabSelected === 'Status' && (
            <About>
              <AboutTextContainer>
                <Text appearance="hint" >hp:{' '}
                  <Text>{pokemon.stats[0].base_stat}</Text>
                </Text>
              </AboutTextContainer>
              <AboutTextContainer>
                <Text appearance="hint" >ataque:{' '}
                  <Text>{pokemon.stats[1].base_stat}</Text>
                </Text>
              </AboutTextContainer>
              <AboutTextContainer>
                <Text appearance="hint" >defesa:{' '}
                  <Text>{pokemon.stats[2].base_stat}</Text>
                </Text>
              </AboutTextContainer>
              <AboutTextContainer>
                <Text appearance="hint" >ataque especial:{' '}
                  <Text>{pokemon.stats[3].base_stat}</Text>
                </Text>
              </AboutTextContainer>
              <AboutTextContainer>
                <Text appearance="hint" >defesa especial:{' '}
                  <Text>{pokemon.stats[4].base_stat}</Text>
                </Text>
              </AboutTextContainer>
              <AboutTextContainer>
                <Text appearance="hint" >velocidade:{' '}
                  <Text>{pokemon.stats[5].base_stat}</Text>
                </Text>
              </AboutTextContainer>
            </About>
          )}
          {tabSelected === 'Movimentos' && (
            <About>
              <AboutTextContainer>
                <Text appearance="hint" >Movimentos:{' '}
                  <Text>{getString(pokemon.moves, (item: any) => item.move.name)}</Text>
                </Text>
              </AboutTextContainer>
            </About>
          )}

        </Content>

      )}
    </Container >
  )
}